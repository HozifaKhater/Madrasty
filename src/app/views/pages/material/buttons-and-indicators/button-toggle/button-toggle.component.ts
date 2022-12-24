import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DelaysDataService } from '../../../../../Services/DelaysDataService';
import { DelaysMaster, Delays } from '../../../../../DelaysMaster.Model';
import { EmployeeMaster, Employee } from '../../../../../EmployeeMaster.Model';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import moment from 'moment';

@Component({
	selector: 'kt-button-toggle',
	templateUrl: './button-toggle.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-selected-value {
		margin: 15px 0;
	  }
	`]
})
export class ButtonToggleComponent implements OnInit {
	@Input() delay_data: any;
	delay_id: number;
	delay_date: string = "";

	delay_emp_name: string = "";
	time_attend: string = "";
	delay_state: number;
	delay_emp_id: number;
	Employees: Employee[];
	employeedepartment: any;
	exampleBasic;
	exampleVertical;
	exampleList;

	constructor(private EmployeeService: EmployeeDataService, private DelaysDataService: DelaysDataService) {
		this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));
		/*this.dep_name="abc"*/
		/*this.onChange()*/
	}
	add_delay() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			delay_date: moment(this.delay_date).format('DD/MM/YYYY'),
			delay_emp_name: String(this.employeedepartment.emp_name),
			time_attend: this.time_attend,
			delay_state: this.delay_state,
			delay_emp_id: Number(this.employeedepartment.emp_id)
		};
		console.log("asd", val)
		this.DelaysDataService.addDelays(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_delay() {

		var val = {
			delay_id: this.delay_id,
			delay_date: moment(this.delay_date).format('DD/MM/YYYY'),
			delay_emp_name: String(this.employeedepartment.emp_name),
			time_attend: this.time_attend,
			delay_state: this.delay_state,
			delay_emp_id: Number(this.employeedepartment.emp_id)
		};

		console.log("val", val);


		this.DelaysDataService.updateDelays(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_delay() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.DelaysDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.delay_id = Number(this.DelaysDataService.delay_id);

				this.delay_date = this.DelaysDataService.delay_date;
				this.delay_emp_name = this.DelaysDataService.delay_emp_name;
				this.time_attend = this.DelaysDataService.time_attend;
				this.delay_state = Number(this.DelaysDataService.delay_state);
				this.delay_emp_id = Number(this.DelaysDataService.delay_emp_id);

			});
				var test1

				this.delay_id = this.delay_id;
				this.delay_date = this.delay_date;
				this.delay_emp_name = this.delay_emp_name;
				this.time_attend = this.time_attend;
				this.delay_state = this.delay_state;
		this.delay_emp_id = this.delay_emp_id;
			}

	}


