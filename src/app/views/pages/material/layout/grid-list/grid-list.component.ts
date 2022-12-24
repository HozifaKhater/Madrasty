import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { Employee,EmployeeMaster} from '../../../../../EmployeeMaster.Model';
import { EzonDataService } from '../../../../../Services/EzonDataService';
const dynamicGrid = {
	beforeCodeTitle: 'Dynamic grid-list',
	htmlCode: `
<mat-grid-list cols="4" rowHeight="100px">
<mat-grid-tile
*ngFor="let tile of tiles"
[colspan]="tile.cols"
[rowspan]="tile.rows"
[style.background]="tile.color">
{{tile.text}}
</mat-grid-tile>
</mat-grid-list>
`,
	tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Dynamic grid-list
*/
@Component({
selector: 'grid-list-dynamic-example',
templateUrl: 'grid-list-dynamic-example.html',
styleUrls: ['grid-list-dynamic-example.css'],
})
export class GridListDynamicExample {
tiles = [
{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];
}
`,
	cssCode: ``,
	viewCode: ``,
	isCodeVisible: false,
	isExampleExpanded: true
};


const basicGrid = {
	beforeCodeTitle: 'Basic grid-list',
	htmlCode: `
<mat-grid-list cols="2" rowHeight="2:1">
<mat-grid-tile>1</mat-grid-tile>
<mat-grid-tile>2</mat-grid-tile>
<mat-grid-tile>3</mat-grid-tile>
<mat-grid-tile>4</mat-grid-tile>
</mat-grid-list>
`,
	tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic grid-list
*/
@Component({
selector: 'grid-list-overview-example',
styleUrls: ['grid-list-overview-example.css'],
templateUrl: 'grid-list-overview-example.html',
})
export class GridListOverviewExample {}
`,
	cssCode: `
mat-grid-tile {
background: lightblue;
}
	`,
	viewCode: ``,
	isCodeVisible: false,
	isExampleExpanded: true
};

@Component({
	selector: 'kt-grid-list',
	templateUrl: './grid-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	mat-grid-tile {
		background: lightblue;
	  }
	`]
})
export class GridListComponent implements OnInit {
	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];
	tiles = [
		{ text: 'One', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
	];

	exampleBasicGrid;
	exampleDynamicGrid;
	Employee: Employee[];
	constructor(private EmployeeDataService: EmployeeDataService, private EzonDataService: EzonDataService) {
		this.EmployeeDataService.GetAllEmployee().subscribe(data => this.Employee = data,
			error => console.log(error),
			() => { console.log("department dropdown") });
	}
	bind_ezons(event) {
		this.EzonDataService.emp_id = event.source.value.emp_id;
		this.EzonDataService.BindClicked("test");
	}
	ngOnInit() {
		this.exampleBasicGrid = basicGrid;
		this.exampleDynamicGrid = dynamicGrid;
	}

}
