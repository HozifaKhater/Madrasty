﻿// Angular
import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
// Material
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
// RXJS
import { debounceTime, distinctUntilChanged, tap, skip, delay, take } from 'rxjs/operators';
import { fromEvent, merge, Subscription, of } from 'rxjs';
// Translate Module
import { TranslateService } from '@ngx-translate/core';
// NGRX
import { Store, ActionsSubject } from '@ngrx/store';
import { AppState } from '../../../../../../core/reducers';
// CRUD
import { LayoutUtilsService, MessageType, QueryParamsModel } from '../../../../../../core/_base/crud';
// Components
import { DefinitionDataService } from '../../../../../../Services/Definition';
import { Definition, DefinitionMaster } from '../../../../../../Definitions.Model';
import { CustomersPageRequested } from '../../../../../../core/e-commerce';




@Component({

	selector: 'kt-Definition-list',
	templateUrl: './Definition-list.html',
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class DefinitionListComponent implements OnInit, OnDestroy {

	ELEMENT_DATA: Definition[];

	displayedColumns = ['select', 'def_id', 'def_name', 's_code', 's_code_arabic', 'actions'];
	
	dataSource: any;

	allDefinitions: DefinitionMaster[];

	@ViewChild(MatSort, { static: true }) sort: MatSort;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	@ViewChild('searchInput', { static: true }) searchInput: ElementRef;

	private subscriptions: Subscription[] = [];

	constructor(
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private layoutUtilsService: LayoutUtilsService,
		private translate: TranslateService,
		private store: Store<AppState>,
		private DefinitionService: DefinitionDataService
	) {
		this.get_definitions(DefinitionService);
	}

	get_definitions(DefinitionService: DefinitionDataService) {
		this.DefinitionService.GetDefinitions().subscribe(data => this.allDefinitions = data,
			error => console.log(error),
			() => console.log("ok"));

		this.DefinitionService.GetDefinitions().subscribe(data => this.ELEMENT_DATA = data,
			error => console.log(error),
			() => this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
		);

		console.log('data ', this.dataSource);
	}

	definition_info: any[];

	editDefinition(definition: Definition) {

		this.DefinitionService.GetDefinitionWithId(definition.def_id).subscribe(data => this.definition_info = data,
			error => console.log("error in edit definition"),
			() => {
				for (let item of this.definition_info) {

					console.log('testdepname', item);

					this.DefinitionService.def_id = Number(item.def_id);

					this.DefinitionService.def_name = item.def_name;

					this.DefinitionService.s_code = item.s_code;

					this.DefinitionService.s_code_arabic = item.s_code_arabic;
				
				};
				console.log('Component A is clicked!!', this.DefinitionService.def_name);
				this.DefinitionService.AClicked('Component A is clicked!!');
			}
		);


	}

	deleteDefinition(definition: Definition, DefinitionService: DefinitionDataService) {

		console.log('Definition ID', definition.def_id);

		this.DefinitionService.deleteDefinition(Number(definition.def_id)).subscribe(res => {
			this.get_definitions(DefinitionService);;
			alert(res.toString());

		})
	}

	ngOnInit() {


		// If the user changes the sort order, reset back to the first page.
		const sortSubscription = this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
		this.subscriptions.push(sortSubscription);

		/* Data load will be triggered in two cases:
		- when a pagination event occurs => this.paginator.page
		- when a sort event occurs => this.sort.sortChange
		**/
		const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page).pipe(
            tap(() => this.loadCustomersList())
		)
			.subscribe();
		this.subscriptions.push(paginatorSubscriptions);

		
			
		// Init DataSource

		// First load
		of(undefined).pipe(take(1), delay(1000)).subscribe(() => { // Remove this line, just loading imitation
            this.loadCustomersList();
		}); // Remove this line, just loading imitation
	}

	selection = new SelectionModel<Definition>(true, []);

    loadCustomersList() {
		this.selection.clear();
		const queryParams = new QueryParamsModel(
			this.filterConfiguration(),
			this.sort.direction,
			this.sort.active,
			this.paginator.pageIndex,
			this.paginator.pageSize

		);
		// Call request from server
        this.store.dispatch(new CustomersPageRequested({ page: queryParams }));
		this.selection.clear();
		console.log("yyyy", this.ELEMENT_DATA);
	}

	filterStatus: string = '';

	filterType: string = '';

	filterConfiguration(): any {
		const filter: any = {};
		const searchText: string = this.searchInput.nativeElement.value;

		if (this.filterStatus && this.filterStatus.length > 0) {
			filter.status = +this.filterStatus;
		}

		if (this.filterType && this.filterType.length > 0) {
			filter.type = +this.filterType;
		}

		filter.lastName = searchText;
		if (!searchText) {
			return filter;
		}

		filter.firstName = searchText;
		filter.email = searchText;
		filter.ipAddress = searchText;
		return filter;
	}


	ngOnDestroy() {
		this.subscriptions.forEach(el => el.unsubscribe());
	}


}


