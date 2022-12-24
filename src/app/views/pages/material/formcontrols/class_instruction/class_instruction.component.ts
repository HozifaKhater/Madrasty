import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { instructionsDataService } from '../../../../../Services/instructionsDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { instructions,instructionsMaster} from '../../../../../instructionsMaster.Model';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';
import { Levels, LevelsMaster } from '../../../../../LevelsMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';
import { Classes, ClassesMaster } from '../../../../../ClassesMaster.Model';
import { startWith, map } from 'rxjs/operators';
@Component({
    selector: 'kt-class_instruction',
    templateUrl: './class_instruction.component.html',
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
export class class_instructionComponent implements OnInit {
	@Input() activity_data: any;
    ser: string = "";
    level_name: string = "";
    level_id: string = "";
    class_name: string = "";
    class_id: string = "";
    topic: string = "";
    group_number: string = "";
    sessions_number: string = "";
    notes: string = "";


	selecteddepartment: any;
	exampleBasicRadios;
	exampleRadiosWithNgModel;
	exampleDisabledRadios;
	exmapleLabelPosition;
	exampleChangeEvent;
	departments: Departments[];
    instructions: instructions[];
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
    constructor(public _fb: FormBuilder,
        private LevelsDataService: LevelsDataService,
        private ClassesDataService: ClassesDataService,
        private DepartmentService: DepartmentDataService, private instructionsDataService: instructionsDataService, private router: Router) {
        //this.router.navigate(['/error/403']);
        this.DepartmentService.GetAlldepartment().subscribe(data => this.departments = data,
			error => console.log(error),
            () => console.log("ok"));
        this.form1 = this._fb.group({
            selected_level: ['', [Validators.required]],
            selected_class: ['', [Validators.required]],
             topic: ['', [Validators.required]]
        });
	}
    level: Levels[];
    class: Classes[];
    filteredlevel: Observable<any[]>;
    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.level.filter(option => option.lev_name.toLowerCase().includes(filterValue));
    }
    displayFn(selectedoption) {
        return selectedoption ? selectedoption.lev_name : undefined;
    }
    filteredclass: Observable<any[]>;
    private _filter_class(value: string) {
        const filterValue = value.toLowerCase();
        return this.class.filter(option => option.class_name.toLowerCase().includes(filterValue));
    }
    displayFn_class(selectedoption) {
        return selectedoption ? selectedoption.class_name : undefined;
    }
    myControl = new FormControl('');
    change_level(event) {
        this.level_name = event.lev_name;
        this.level_name = event.lev_id;
        this.ClassesDataService.GetAllClasses_with_level_id(event.lev_id).subscribe(data => this.class = data,
            error => console.log(error),
            () => {
                this.filteredclass = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.class_name),
                        map(class_name => class_name ? this._filter_class(class_name) : this.class.slice())
                    );
                console.log("testclass", this.filteredlevel)
                //this.filteredList = this.country.slice();
                //console.log("ok", this.filteredList);
            });
    }
    change_class(event) {
        this.class_name = event.class_name;
        this.class_name = event.class_id;
     
    }
    add_activity() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

            
            level_name: this.level_name,
            level_id: this.level_id,
            class_name: this.class_name,
            class_id: this.class_id,
            topic: this.topic,
            group_number: this.group_number,
            sessions_number: this.sessions_number,
            notes: this.notes,

		};
		console.log("asd", val)
        this.instructionsDataService.addinstructions(val).subscribe(res => {
			alert("Saved Successfuly");
		})
		console.log(val)
	}
	
	update_department() {
	
		var val = {
            ser:Number(this.instructionsDataService.ser),
            level_name: this.level_name,
            level_id: this.level_id,
            class_name: this.class_name,
            class_id: this.class_id,
            topic: this.topic,
            group_number: this.group_number,
            sessions_number: this.sessions_number,
            notes: this.notes,

		};

		console.log("val", val);


		this.instructionsDataService.updateinstructions(val).subscribe(res => {
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

		this.instructionsDataService.aClickedEvent
			.subscribe((data: string) => {
			


				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

				console.log("department", this.selecteddepartment);
                this.ser = String(this.instructionsDataService.ser);
                this.level_name = this.instructionsDataService.level_name;
                this.level_id = this.instructionsDataService.level_id;
                this.class_name = this.instructionsDataService.class_name;
                this.class_id = this.instructionsDataService.class_id;
                this.topic = this.instructionsDataService.topic;
                this.group_number = this.instructionsDataService.group_number;
                this.sessions_number = this.instructionsDataService.sessions_number;
                this.notes = this.instructionsDataService.notes;

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
