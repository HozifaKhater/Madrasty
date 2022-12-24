import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivityDataService } from '../../../../../Services/ActivityDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { ActivityMaster, activity } from '../../../../../ActivityMaster.Model';
import { Router } from '@angular/router';
import { financial__fund_expenses,financial__fund_expensesMaster } from '../../../../../financial__fund_expenses.Model';
import { financial__fund_expensesDataService } from '../../../../../Services/financial__fund_expensesDataService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'kt-financial__fund_expenses',
    templateUrl: './financial__fund_expenses.component.html',
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
export class financial__fund_expensesComponent implements OnInit {
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
    form1: FormGroup;
    constructor(public _fb: FormBuilder,private financial__fund_expensesDataService: financial__fund_expensesDataService,private DepartmentService: DepartmentDataService, private ActivityService: ActivityDataService, private router: Router) {
        //this.router.navigate(['/error/403']);
        this.DepartmentService.GetAlldepartment().subscribe(data => this.departments = data,
			error => console.log(error),
            () => console.log("ok"));
        this.form1 = this._fb.group({
            id: ['', [Validators.required]],
            type_name: ['', [Validators.required]],
            date: ['', [Validators.required]],
            price: ['', [Validators.required]],
            notes: ['', [Validators.required]],

        })
    }
    public id: number;
    public type_name: string="";
    public date: string = "";
    public price: string = "";
    public notes: string;
	add_activity() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

           
            
            type_name: this.type_name,
            date: this.date,
            price: this.price,
            notes: this.notes,



		};
		console.log("asd", val)
        this.financial__fund_expensesDataService.addfinancial__fund_expenses(val).subscribe(res => {
            alert("Saved Successfuly");
            this.financial__fund_expensesDataService.BClicked("");
            this.form1.reset();
		})
		console.log(val)
	}
	activity: activity[];
	update_department() {
	
		var val = {
            id: this.id,
            type_name: this.type_name,
            date: this.date,
            price: this.price,
            notes: this.notes,

		};

		console.log("val", val);


		this.financial__fund_expensesDataService.updatefinancial__fund_expenses(val).subscribe(res => {
            alert(res.toString());
            this.financial__fund_expensesDataService.BClicked("");
            this.form1.reset();
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

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

		this.financial__fund_expensesDataService.aClickedEvent
			.subscribe((data: string) => {
				
				


				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

			
                this.id = this.financial__fund_expensesDataService.id;
                this.type_name = this.financial__fund_expensesDataService.type_name;
                this.date = this.financial__fund_expensesDataService.date;
                this.price = this.financial__fund_expensesDataService.price;
                this.notes = this.financial__fund_expensesDataService.notes;

				
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
	
	}

	changeState() {
		this.state = this.selectedState;
	}
}
