import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivityDataService } from '../../../../../Services/ActivityDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { ActivityMaster, activity } from '../../../../../ActivityMaster.Model';
import { School_year_data,School_year_dataMaster } from '../../../../../School_year_dataMaster.Model';
import { School_year_dataDataService } from '../../../../../Services/School_year_dataDataService';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import moment from 'moment';
@Component({
	selector: 'kt-radiobutton',
	templateUrl: './radiobutton.component.html',
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
export class RadiobuttonComponent implements OnInit {
	@Input() activity_data: any;
	activity_id: string = "";
	activity_name: string="";
	activity_dep: string = "";
	
    activity_level: any;
    activity_date:any= new Date();
   
	activity_school_term: any;
	activity_notes: string = "";
	dep_id: string = "";
    year_data: School_year_data[];
    selecteddepartment: any;
    activity_school_year: any;
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
		{ value: '2', viewValue: 'الثاني' }
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
    constructor(public _fb: FormBuilder
        , private DepartmentService: DepartmentDataService,
        private ActivityService: ActivityDataService,
        private router: Router,
        private School_year_dataDataService: School_year_dataDataService) {
        //this.router.navigate(['/error/403']);
        this.form1 = this._fb.group({
            activity_id: [{ value: '', disabled: true }],
            activity_name: ['', [Validators.required]],
            selecteddepartment: ['', [Validators.required]],
            activity_school_year: ['', [Validators.required]],
            activity_level: ['', [Validators.required]],
            activity_date: [{ value: '', disabled: true }, [Validators.required]],
            activity_school_term: ['', [Validators.required]],
            activity_notes: ['', [Validators.pattern]]
        });
        this.DepartmentService.GetAlldepartment().subscribe(data => this.departments = data,
			error => console.log(error),
            () => console.log("ok"));
        this.School_year_dataDataService.get_school_year_data_for_dropdown().subscribe(data => this.year_data = data,
            error => console.log(error),
            () => console.log("ok", this.year_data));
	}
	add_activity() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {

                activity_name: this.activity_name,
                activity_dep: String(this.selecteddepartment.dep_id),
                activity_school_year: this.activity_school_year.year_data,
                activity_school_year_id: Number(this.activity_school_year.year_data_id),
                activity_level: this.activity_level.value,
                activity_date:  this.activity_date,
                activity_school_term: this.activity_school_term.value,
                activity_notes: String(this.activity_notes)
            };
            console.log("asd", val)
            this.ActivityService.addActivity(val).subscribe(res => {
                alert("Saved Successfuly");
                this.ActivityService.BClicked("b2");
            })
            console.log(val)
            this.form1.reset();
        }
        
	}
	activity: activity[];
	update_department() {
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {
                activity_id: this.ActivityService.activity_id,
                activity_name: this.activity_name,
                activity_dep: String(this.selecteddepartment.dep_id),
                activity_school_year: this.activity_school_year.year_data,
                activity_school_year_id: Number(this.activity_school_year.year_data_id),
                activity_level: this.activity_level.value,
                activity_date: this.activity_date,
                activity_school_term: this.activity_school_term.value,
                activity_notes: String(this.activity_notes)
            };

            console.log("val", val);


            this.ActivityService.updateActivity(val).subscribe(res => {
                alert(res.toString());
                this.ActivityService.BClicked("b2");
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            })
            this.form1.reset();
        }

	}
    cancel_department() {
        this.form1.reset();
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
                //console.log(String(this.ActivityService.activity_school_year_id),"test")
                console.log(this.year_data[3])
                console.log("activitydate", this.ActivityService.activity_date);
				var selected_value =String(this.ActivityService.activity_dep);
				this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
					return el.dep_id == selected_value;})];
				
                var selected_value1 = String(this.ActivityService.activity_school_year_id);
                this.activity_school_year = this.year_data[this.year_data.findIndex(function (el) {
                    
                    return String(el.year_data_id) == selected_value1;

                })];

                var selected_value2 = String(this.ActivityService.activity_level);
                this.activity_level = this.foods[this.foods.findIndex(function (el) {

                    return String(el.value) == selected_value2;

                })];


                var selected_value3 = String(this.ActivityService.activity_school_term);
                this.activity_school_term = this.semesters[this.semesters.findIndex(function (el) {

                    return String(el.value) == selected_value3;

                })];
                
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
			
				
				this.activity_id = String(this.ActivityService.activity_id);
				this.activity_name = this.ActivityService.activity_name;
				this.activity_dep = this.ActivityService.activity_dep;
				this.activity_date =  new Date(this.ActivityService.activity_date);
				this.activity_notes = this.ActivityService.activity_notes;
			
                console.log("edited", this.activity_date)

			});
		
	}

	changeState() {
		this.state = this.selectedState;
	}
}
