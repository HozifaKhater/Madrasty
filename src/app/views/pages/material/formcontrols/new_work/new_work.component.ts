import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { new_workDataService } from '../../../../../Services/new_workDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { new_work,new_workMaster } from '../../../../../new_workMaster.Model';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
    selector: 'kt-new_work',
    templateUrl: './new_work.component.html',
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
export class new_workComponent implements OnInit {
	@Input() activity_data: any;
	ser: string = "";
    notes: string = "";
	dep_id: string = "";
    date: any;
	selecteddepartment: any;
	exampleBasicRadios;
	exampleRadiosWithNgModel;
	exampleDisabledRadios;
	exmapleLabelPosition;
	exampleChangeEvent;
	departments: Departments[];
    new_work: new_work[];
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
    form1: FormGroup;
    constructor(public _fb: FormBuilder,private DepartmentService: DepartmentDataService, private new_workDataService: new_workDataService, private router: Router) {
        //this.router.navigate(['/error/403']);
        this.form1 = this._fb.group({
            notes: ['', [Validators.required]],
            date: ['', [Validators.required]]
           
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

			new_work: this.notes,
			
		};
		console.log("asd", val)
        this.new_workDataService.addnew_work(val).subscribe(res => {
			alert("Saved Successfuly");
		})
		console.log(val)
	}

	update_department() {
	
		var val = {
            ser: this.new_workDataService.ser,
            new_work: this.notes
           
		};

		console.log("val", val);


        this.new_workDataService.updatenew_work(val).subscribe(res => {
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

		this.new_workDataService.aClickedEvent
			.subscribe((data: string) => {


				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

				console.log("department", this.selecteddepartment);
				this.notes = this.new_workDataService.new_work;
		
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
