import { OnInit, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Add_libDataService } from '../../../../Services/Add_libDataService';
import { Add_libMaster, Add_lib } from '../../../../Add_libMaster.Model';
import moment from 'moment';

@Component({
	selector: 'kt-accordion',
	templateUrl: './accordion.component.html',
	styles: [`
		.card-header--title {
			display:block;
		}
	`],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class AccordionComponent implements OnInit {
	@Input() lib_data: any;
	lib_id: number;
	lib_book: string = "";
	lib_ref: string = "";
	lib_book_name: string = "";
	lib_author_name: string = "";
	lib_date: string = "";
	lib_page_no: number;
	lib_rec_no: number;
	lib_classification: string = "";
    selecteddepartment: any;
    employeedepartment: any;
	exampleAccordion: any;
	exampleOneOpenPanelAtAHome: any;
	exampleTogglePanels: any;
	examplePreventPanelToggle: any;
	exampleGlobalConfigurationOfAccordions: any;
    disabled: boolean;
    disabled_emp: boolean;
	Departments = [
		{ value: '1', viewValue: '1' },
		{ value: '2', viewValue: '2' },
		{ value: '3', viewValue: '3' }
	];
	Employees = [
		{ value: '1', viewValue: '1' },
		{ value: '2', viewValue: '2' },
		{ value: '3', viewValue: '3' }
	];

	constructor(config: NgbAccordionConfig, private Add_libDataService: Add_libDataService) {
		// customize default values of accordions used by this component tree
		// config.closeOthers = true;
		//  config.type = 'info';
	}

	checked_radio: any;
	handleChange(evt) {
		if (evt.target.value === "employee") {
			this.disabled = true
			this.disabled_emp = false
		}
		else if (evt.target.value === "department") {
			this.disabled = false
			this.disabled_emp = true
		}
		console.log(evt.target.value, evt);
		this.checked_radio = evt.target.value
	}

	butdisableclass: number;
	butdisablework: number;
	side_jobclass_chck_change(event) {
		//if ((<HTMLInputElement>document.getElementById("side_dep_chck")).checked = true) {
		//	console.log("checked changed")
		//}
		console.log(event)
		if (event.checked == true) {
			this.butdisableclass = 1;
		}
		if (event.checked === false) {
			this.butdisableclass = 0;
		}
	}
	side_jobwork_chck_change(event) {
		//if ((<HTMLInputElement>document.getElementById("side_dep_chck")).checked = true) {
		//	console.log("checked changed")
		//}
		console.log(event)
		if (event.checked == true) {
			this.butdisablework = 1;
		}
		if (event.checked === false) {
			this.butdisablework = 0;
		}
	}

	add_lib() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			lib_book: this.butdisableclass,
			lib_ref: this.butdisablework,
			lib_book_name: this.lib_book_name,
			lib_author_name: this.lib_author_name,
			lib_date: moment(this.lib_date).format('DD/MM/YYYY'),
			lib_page_no: Number(this.lib_page_no),
			lib_rec_no: Number(this.lib_rec_no),
			lib_classification: this.lib_classification
		};
		console.log("asd", val)
		this.Add_libDataService.addAdd_lib(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_lib() {

		var val = {
			lib_id: Number(this.lib_id),

			lib_book: this.butdisableclass,
			lib_ref: this.butdisablework,
			lib_book_name: this.lib_book_name,
			lib_author_name: this.lib_author_name,
			lib_date: moment(this.lib_date).format('DD/MM/YYYY'),
			lib_page_no: Number(this.lib_page_no),
			lib_rec_no: Number(this.lib_rec_no),
			lib_classification: this.lib_classification
		};

		console.log("val", val);


		this.Add_libDataService.updateAdd_lib(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_lib() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Add_libDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.lib_id = Number(this.Add_libDataService.lib_id);
				this.lib_book = String(this.Add_libDataService.lib_book);
				this.lib_ref = String(this.Add_libDataService.lib_ref);
				this.lib_book_name = this.Add_libDataService.lib_book_name;
				this.lib_author_name = this.Add_libDataService.lib_author_name;
				this.lib_date = this.Add_libDataService.lib_date;
				this.lib_page_no = Number(this.Add_libDataService.lib_page_no);
				this.lib_rec_no = Number(this.Add_libDataService.lib_rec_no);
				this.lib_classification = this.Add_libDataService.lib_classification;

			});
		var test1

		this.lib_id = this.lib_id;
		this.lib_book = this.lib_book;
		this.lib_ref = this.lib_ref;
		this.lib_book_name = this.lib_book_name;
		this.lib_author_name = this.lib_author_name;
		this.lib_date = this.lib_date;
		this.lib_page_no = this.lib_page_no;
		this.lib_rec_no = this.lib_rec_no;
		this.lib_classification = this.lib_classification;
	}

	// api methods
	// ng-methods
	beforeChange($event: NgbPanelChangeEvent) {

		if ($event.panelId === 'preventchange-2') {
			$event.preventDefault();
		}

		if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
			$event.preventDefault();
		}
	}
}
