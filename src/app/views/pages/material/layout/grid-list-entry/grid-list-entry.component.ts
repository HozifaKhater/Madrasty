import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { Employee, EmployeeMaster } from '../../../../../EmployeeMaster.Model';
import { EzonDataService } from '../../../../../Services/EzonDataService';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { ezon, EzonMaster } from '../../../../../EzonMaster.Model';
import { DatePipe } from '@angular/common';
import moment from 'moment';
//import { enableRipple } from '@syncfusion/ej2-base';
//enableRipple(false);
//import { TimePicker } from '@syncfusion/ej2-calendars';

@Component({
	selector: 'kt-gridentry-list',
	templateUrl: './grid-list-entry.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	mat-grid-tile {
		background: lightblue;
	  }
	`]
})
//let timeObj: TimePicker = new TimePicker({
//	placeholder: 'Select a time'
//});
//timeObj.appendTo('#timepicker');
//timeObj.show();
export class GridListEntryComponent implements OnInit {
	time = { hour: 13, minute: 30 };
	meridian = true;
	time_from: string;
	time_to: string;
	selecteddepartment: any;
	selectedemployee: any;
	ezn_date: any;
	ezn_reason: string;
	toggleMeridian() {
		this.meridian = !this.meridian;
	}
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

	ezon: ezon[];

	employees: Employee[];

	departments: Departments[];
	departmentemp(event) {
		console.log("wwww", this.selecteddepartment, event.source.value.dep_id, event);


		this.EmployeeDataService.GetAllEmployee_of_department(event.source.value.dep_id).subscribe(data => this.employees = data,
			error => console.log(error),
			() => console.log("department dropdown", this.employees));

	}
	Employee: Employee[];
	constructor(private EmployeeDataService: EmployeeDataService, private DepartmentDataService: DepartmentDataService, private EzonDataService: EzonDataService, private datePipe: DatePipe) {
		this.DepartmentDataService.GetAllMasterdepartment().subscribe(data => this.departments = data,
			error => console.log(error),
			() => this.EmployeeDataService.GetAllEmployee_of_department(this.departments[0].dep_id).subscribe(data => this.employees = data,
				error => console.log(error),
				() => console.log("empoppppppppppp dropdown", this.employees)));
		};
	
	add_ezon() {
		/*console.log("emp", , this.employeedepartment );*/
		var val = {

			emp_id: this.selectedemployee.emp_id,
			ezn_date: moment(this.ezn_date).format('DD/MM/YYYY'),
			ezn_reason: this.ezn_reason,
			time_from: this.time_from,
			time_to: this.time_to,
		};
		console.log("val", val)



		this.EzonDataService.addEzon(val).subscribe(res => {
			alert(res.toString());
		})
	}
	transformDate(date) {
		var dateToDBthis;
		return dateToDBthis.datePipe.transform(date, 'yyyy-MM-dd');
	}
	update_ezon() {


		/*console.log("emp", emp, this.employeedepartment );*/
		var val = {
			ezn_id: this.EzonDataService.ezn_id,
			emp_id: this.selectedemployee.emp_id,
			ezn_date: this.ezn_date,
			ezn_reason: this.ezn_reason,
			time_from: this.time_from,
			time_to: this.time_to,
		};

		console.log("val", val);


		this.EzonDataService.updateEzon(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_ezon() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	emp_info: any[];
	emp_id_for_dep: any;
	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/
		
		this.EzonDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

				this.time_from = this.EzonDataService.time_from;
				this.time_to = this.EzonDataService.time_to;
				this.time_from = this.EzonDataService.time_from;
				this.ezn_date = this.EzonDataService.ezn_date;
				this.ezn_reason = this.EzonDataService.ezn_reason;

				this.EmployeeDataService.GetAllEmployee_with_id(this.EzonDataService.emp_id).subscribe(data => this.emp_info = data,
					error => console.log("errorrrrrrrrrrr"),
					() => {
						for (let item of this.emp_info) {

							var selected_value = item.emp_dep_id
							
				this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
					return el.dep_id == selected_value
				})];/*x => x.dep_id === this.DepartmentService.parent_id)];*/
							var selected_value_emp = this.EzonDataService.emp_id
							console.log("asdadas", selected_value_emp, this.employees)
							this.selectedemployee = this.employees[this.employees.findIndex(function (el) {
								return el.emp_id == selected_value_emp
							})];/*x => x.dep_id === this.DepartmentService.parent_id)];*/};

					});
				

				//var selected_value_emp = this.EzonDataService.emp_id
				//console.log("asdadas", selected_value_emp, this.employees)
				//this.selectedemployee = this.employees[this.employees.findIndex(function (el) {
				//	return el.emp_id == selected_value_emp
				//})];/*x => x.dep_id === this.DepartmentService.parent_id)];*/

				console.log("edited")

			});

		this.time_from = this.time_from;
		this.time_to = this.time_to;
		this.ezn_date = this.ezn_date;
		this.ezn_reason = this.ezn_reason;
	}

}
