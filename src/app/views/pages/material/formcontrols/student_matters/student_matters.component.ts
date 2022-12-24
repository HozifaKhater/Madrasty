import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivityDataService } from '../../../../../Services/ActivityDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { ActivityMaster, activity } from '../../../../../ActivityMaster.Model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'kt-student_matters',
    templateUrl: './student_matters.component.html',
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
	`]
})
export class student_mattersComponent implements OnInit {
	@Input() activity_data: any;
	activity_id: string = "";
	activity_name: string;
	activity_dep: string = "";
	activity_school_year: string = "";
	activity_level: string = "";
	activity_date: string = "";
	activity_school_term: string = "";
	activity_notes: string = "";
    dep_id: string = "";
    id: string = "";
    level_id: string = "";
    level_name: string = "";
    class_id: string = "";
    class_name: string = "";
    note_date: string = "";
    topic: string = "";
    ntoes: string = "";
    level: any;
    class: any;
    student: any;
    displayFn() { }
    filteredOptions: any;
    notes: any;
    form1: FormGroup;
	selecteddepartment: any;
	exampleBasicRadios;
	exampleRadiosWithNgModel;
	exampleDisabledRadios;
	exmapleLabelPosition;
	exampleChangeEvent;
	departments: Departments[];
	activities: ActivityMaster[];
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

    constructor(private DepartmentService: DepartmentDataService, private ActivityService: ActivityDataService, private router: Router) {
        //this.router.navigate(['/error/403']);
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

			activity_name: this.activity_name,
			activity_dep: String(this.selecteddepartment.dep_id),
			activity_school_year: this.activity_school_year,
			activity_level: String(2),
			activity_date: String(this.activity_date),
			activity_school_term: String(3),
			activity_notes: String(this.activity_notes),
		};
		console.log("asd", val)
		this.ActivityService.addActivity(val).subscribe(res => {
			alert("Saved Successfuly");
		})
		console.log(val)
	}
	activity: activity[];
	update_department() {
	
		var val = {
            activity_id: this.ActivityService.activity_id,
            activity_name: this.activity_name,
            activity_dep: String(this.selecteddepartment.dep_id),
            activity_school_year: this.activity_school_year,
            activity_level: String(2),
            activity_date: String(this.activity_date),
            activity_school_term: String(3),
            activity_notes: String(this.activity_notes),
		};

		console.log("val", val);


		this.ActivityService.updateActivity(val).subscribe(res => {
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

		this.ActivityService.aClickedEvent
			.subscribe((data: string) => {
				console.log("activitydep", this.departments,this.ActivityService.activity_dep, this.departments.findIndex(x => x.dep_id === this.ActivityService.activity_dep) );
				var selected_value =String(this.ActivityService.activity_dep);
				this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
					return el.dep_id == selected_value;
				})];//x => x.dep_id === this.ActivityService.activity_dep)];
				


				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

				console.log("department", this.selecteddepartment);
				this.activity_id = this.ActivityService.dep_id;
				this.activity_name = this.ActivityService.activity_name;
				this.activity_dep = this.ActivityService.activity_dep;
				this.activity_school_year = this.ActivityService.activity_school_year;
				this.activity_level = this.ActivityService.activity_level;
				this.activity_date = this.ActivityService.activity_date;
				this.activity_school_term = this.ActivityService.activity_school_term;
				this.activity_notes = this.ActivityService.activity_notes;
				//console.log("notyeredited", this.Employees, this.DepartmentService.dep_supervisor_id, "index", this.Employees.findIndex(x => x.emp_id === this.DepartmentService.dep_supervisor_id), this.DepartmentService.dep_supervisor_id)
			/*	this.employeedepartment = this.Employees[this.Employees.findIndex(x => x.emp_id === this.DepartmentService.dep_supervisor_id)];//Number(this.DepartmentService.dep_supervisor_id)*/
				console.log(this.departments)
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
		this.dep_id = this.dep_id;
		this.activity_name = this.activity_name;
		this.activity_dep = this.activity_dep;
		this.activity_school_year = this.activity_school_year;
		this.activity_level = this.activity_level;
		this.activity_date = this.activity_date;
		this.activity_school_term = this.activity_school_term;
		this.activity_notes = this.activity_notes;
		console.log(this.activity_name, this.dep_id);
	}

	changeState() {
		this.state = this.selectedState;
	}
}
