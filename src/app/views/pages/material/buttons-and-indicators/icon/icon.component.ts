import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { NchraDataService } from '../../../../../Services/NchraDataService';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';

import { NchraMaster, Nchra } from '../../../../../NchraMaster.Model';
import { EmployeeMaster, Employee } from '../../../../../EmployeeMaster.Model';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';

import moment from 'moment';

@Component({
	selector: 'kt-icon',
	templateUrl: './icon.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
	@Input() nchra_data: any;
	nchra_id: number;
	nchra_date: string = "";
	returned_nchra_id: string = "";
	nchra_sender: string = "";
	nchra_topic: string = "";
	nchra_text: string = "";

	Employees: Employee[];
	employeedepartment: any;
	employeemorsl: any;
	Departments: Departments[];
	selecteddepartment: any;
	disabled: boolean;
	disabled_emp: boolean;
	//private _prevSelected: any;

	public Editor = ClassicEditor;
	@ViewChild("myEditor", { static: false }) myEditor: any;
	exampleBasic;
	exampleSVG;

	levels = [
		{ value: '1', viewValue: 'مرسل1' },
		{ value: '2', viewValue: ' مرسل2' }
	];
    displayParameter: any;

	constructor(private EmployeeService: EmployeeDataService, private NchraDataService: NchraDataService, private DepartmentDataService: DepartmentDataService) {
		this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));
		this.DepartmentDataService.GetAlldepartment().subscribe(data => this.Departments = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Departments));
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
	selected_obj_id: any;
	selected_obj_name: any;
	add_nchra() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {
		
			nchra_date: moment(this.nchra_date).format('DD/MM/YYYY'),
			nchra_sender: this.employeedepartment.emp_name,

			nchra_topic: this.nchra_topic,
			nchra_text: this.nchra_text

		};

	

		console.log("asd", val)
		this.NchraDataService.addNchra(val).subscribe(res => {
			this.returned_nchra_id = res.toString();

	

		
			if (this.checked_radio === "department") {
				for (let i = 0; i < this.selecteddepartment.length; i++) {

					this.selected_obj_id = Number(this.selecteddepartment[i].dep_id),
						this.selected_obj_name = this.selecteddepartment[i].dep_name

					var val2 = {
						nchra_id: Number(this.returned_nchra_id),

						nchra_obj_id: this.selected_obj_id,
						nchra_obj_name: this.selected_obj_name


					}
					this.NchraDataService.addNchradetails(val2).subscribe(res => { console.log("val2", val2) })
				}
				};

			if (this.checked_radio === "employee") {
				for (let i = 0; i < this.employeedepartment.length; i++) {
					this.selected_obj_id = Number(this.employeedepartment[i].emp_id),
						this.selected_obj_name = this.employeedepartment[i].emp_name

					var val2 = {
						nchra_id: Number(this.returned_nchra_id),

						nchra_obj_id: this.selected_obj_id,
						nchra_obj_name: this.selected_obj_name


					}
					this.NchraDataService.addNchradetails(val2).subscribe(res => { console.log("val2", val2) })
				}
			};
			
	
		
			}

		

		)
	

		
		console.log("multidropdown", this.selecteddepartment)

	}
	//corridorsDataService: corridorsDataService;
	update_nchra() {

		var val = {
			nchra_id: this.nchra_id,
			nchra_date: moment(this.nchra_date).format('DD/MM/YYYY'),
			nchra_sender: this.employeedepartment.emp_name,
			nchra_topic: this.nchra_topic,
			nchra_text: this.nchra_text

		
		};

		this.NchraDataService.addNchra(val).subscribe(res => {
			this.returned_nchra_id = res.toString();




			if (this.checked_radio === "department") {
				for (let i = 0; i < this.selecteddepartment.length; i++) {

					this.selected_obj_id = Number(this.selecteddepartment[i].dep_id),
						this.selected_obj_name = this.selecteddepartment[i].dep_name

					var val2 = {
						nchra_id: Number(this.returned_nchra_id),

						nchra_obj_id: this.selected_obj_id,
						nchra_obj_name: this.selected_obj_name


					}
					this.NchraDataService.addNchradetails(val2).subscribe(res => { console.log("val2", val2) })
				}
			};

			if (this.checked_radio === "employee") {
				for (let i = 0; i < this.employeedepartment.length; i++) {
					this.selected_obj_id = Number(this.employeedepartment[i].emp_id),
						this.selected_obj_name = this.employeedepartment[i].emp_name

					var val2 = {
						nchra_id: Number(this.returned_nchra_id),

						nchra_obj_id: this.selected_obj_id,
						nchra_obj_name: this.selected_obj_name


					}
					this.NchraDataService.addNchradetails(val2).subscribe(res => { console.log("val2", val2) })
				}
			};



		}



		)

		console.log("val", val);


		this.NchraDataService.updateNchra(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_nchra() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.NchraDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.nchra_id = Number(this.NchraDataService.nchra_id);

				this.nchra_date = this.NchraDataService.nchra_date;
				this.nchra_sender = this.NchraDataService.nchra_sender;
				this.nchra_topic = this.NchraDataService.nchra_topic;
				this.nchra_text = this.NchraDataService.nchra_text;


			});
		var test1

		this.nchra_id = this.nchra_id;
		this.nchra_date = this.nchra_date;
		this.nchra_sender = this.nchra_sender;
		this.nchra_topic = this.nchra_topic;
		this.nchra_text = this.nchra_text;

	}

}
