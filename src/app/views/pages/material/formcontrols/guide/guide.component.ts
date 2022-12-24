import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { statusDataService } from '../../../../../Services/StatusDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { status, statusMaster } from '../../../../../statusMaster.Model';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'kt-guide',
    templateUrl: './guide.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	mat-radio-button {
		padding-right: 16px;
	}
	.example-radio-group {
		display: inline-flex;
		flex-direction: column;
	  } 
	  .example-radio-button {
		margin: 15px;
	  }
	.example-selected-value {
		margin: 15px 0;
	}
	`],

})
export class guideComponent implements OnInit {
	@Input() activity_data: any;
    id: string = "";
    status_name: string = "";
    status_id: string = "";
    level_id: string = "";
    level_name: string = "";
    class_id: string = "";
    class_name: string = "";
    student_name: string = "";
    student_id: string = "";
    dob: string = "";
    notes: string = "";


	selecteddepartment: any;
	exampleBasicRadios;
	exampleRadiosWithNgModel;
	exampleDisabledRadios;
    exmapleLabelPosition;
    level: any;
    class: any;
	exampleChangeEvent;
	departments: Departments[];
	status: statusMaster[];
    favoriteSeason: string;
    //myHolidayDates = [
    //    new Date("12/1/2020"),
    //    new Date("12/20/2020"),
    //    new Date("12/17/2020"),
    //    new Date("12/25/2020"),
    //    new Date("12/4/2020"),
    //    new Date("12/7/2020"),
    //    new Date("12/12/2020"),
    //    new Date("12/11/2020"),
    //    new Date("12/26/2020"),
    //    new Date("30/11/2022")
    //];
    //myFilter = (d: Date): boolean => {
    //    //const day = d.getDay();
    //    //// Prevent Saturday and Sunday from being selected.
    //    //return day !== 0 && day !== 6 && !this.myHolidayDates.find(x => x.getTime() == day);
    //}
    student: any;
    displayFn: any;
    filteredOptions: any;
    service: any;
	foods = [
		{ value: '1', viewValue: 'X' },
		{ value: '2', viewValue: 'Y' },
		{ value: '3', viewValue: 'Z' }
	];

	semesters = [
		{ value: '1', viewValue: 'الأول' },
		{ value: '2', viewValue: 'الثاني' },
		{ value: '3', viewValue: 'الثالث' }
	];

	seasons = [
		'Winter',
		'Spring',
		'Summer',
		'Autumn',
	];

	state: string = '';
	selectedState: string = '';

	labelPosition: string = 'before';
	dep_name: any;
	dep_desc: any;

	changeLablesPositions() {
		this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
	}
    form1: FormGroup;
    constructor(public _fb: FormBuilder, private DepartmentService: DepartmentDataService, private statusDataService: statusDataService, private router: Router) {
        //this.router.navigate(['/error/403']);
        this.form1 = this._fb.group({
            status: ['', [Validators.required]],
            level: ['', [Validators.required]],
            class: ['', [Validators.required]],
            student: ['', [Validators.required]],
            service: ['', [Validators.required]],
            notes: ['', [Validators.required]]
        });

        this.DepartmentService.GetAlldepartment().subscribe(data => this.departments = data,
			error => console.log(error),
			() => console.log("ok"));
	}
	add_activity() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

            
            status_name: this.status_name,
            status_id: this.status_id,
            level_id: this.level_id,
            level_name: this.level_name,
            class_id: this.class_id,
            class_name: this.class_name,
            student_name: this.student_name,
            student_id: this.student_id,
            dob: this.dob,
            notes: this.notes

		};
		console.log("asd", val)
		this.statusDataService.addstatus(val).subscribe(res => {
			alert("Saved Successfuly");
		})
		console.log(val)
	}
    statusmodel: status[];
	update_department() {
	
		var val = {
            id: this.id,
            status_name: this.status_name,
            status_id: this.status_id,
            level_id: this.level_id,
            level_name: this.level_name,
            class_id: this.class_id,
            class_name: this.class_name,
            student_name: this.student_name,
            student_id: this.student_id,
            dob: this.dob,
            notes: this.notes,

		};

		console.log("val", val);


		this.statusDataService.updatestatus(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_department() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.statusDataService.aClickedEvent
			.subscribe((data: string) => {
				//var selected_value =String(this.statusDataService.activity_dep);
				//this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
				//	return el.dep_id == selected_value;
				//})];
				


				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

				console.log("department", this.selecteddepartment);
                this.id = String(this.statusDataService.id);
                this.status_name = this.status_name;
                this.status_id = this.status_id;
                this.level_id = this.level_id;
                this.level_name = this.level_name;
                this.class_id = this.class_id;
                this.class_name = this.class_name;
                this.student_name = this.student_name;
                this.student_id = this.student_id;
                this.dob = this.dob;
                this.notes = this.notes;

				//console.log("notyeredited", this.Employees, this.DepartmentService.dep_supervisor_id, "index", this.Employees.findIndex(x => x.emp_id === this.DepartmentService.dep_supervisor_id), this.DepartmentService.dep_supervisor_id)
			/*	this.employeedepartment = this.Employees[this.Employees.findIndex(x => x.emp_id === this.DepartmentService.dep_supervisor_id)];//Number(this.DepartmentService.dep_supervisor_id)*/
				console.log(this.departments)
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
		
	}

	changeState() {
		this.state = this.selectedState;
	}
}
