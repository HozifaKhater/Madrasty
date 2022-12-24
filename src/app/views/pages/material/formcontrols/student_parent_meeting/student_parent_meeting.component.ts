import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { DepartmentMaster, SideDepartmentMaster } from '../../../../../DepartmentMaster.Model';
import { MasterJobMaster } from '../../../../../MasterJobMaster.Model';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { MasterJobsDataService } from '../../../../../Services/MasterJobsDataService';
import { EmployeeMaster } from '../../../../../EmployeeMaster.Model';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';
import { Levels,LevelsMaster } from '../../../../../LevelsMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';
import { Classes,ClassesMaster} from '../../../../../ClassesMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import { Student, StudentMaster } from '../../../../../StudentMaster.Model';
import { student_parent_meetingDataService } from '../../../../../Services/student_parent_meetingDataService ';
import { student_parent_meeting,student_parent_meetingMaster } from '../../../../../student_parent_meetingMaster .Model';
import * as def from '../../../../../definationsMaster.Model';
import moment from 'moment';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder,  FormGroup} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
    selector: 'kt-student_parent_meeting',
    templateUrl: './student_parent_meeting.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-form {
		min-width: 150px;
		max-width: 500px;
		width: 100%;
	  }
	  .example-full-width {
		width: 100%;
	  }
	  .example-form-field {
		width: 200px;
	  }
	`],
    encapsulation: ViewEncapsulation.None
})
export class student_parent_meetingComponent implements OnInit {
 

   
  

   
    //private _filter(value: string): any[] {
    //    const filterValue = value.toLowerCase();

    //    return this.country.filter(country => country);
    //}
	@Input() employee_data: any;
    id: string = "";
    date: string = "";
    level_name: string = "";
    level_id: string = "";
    class_name: string = "";
    class_id: string = "";
    student_id: string = "";
    student_name: string = "";
    reason: string = "";



	departments: DepartmentMaster[];
    side_departments: SideDepartmentMaster[];
    jobs: DepartmentMaster[];
    level: Levels[];
    class: Classes[];
    student: Student[];
   
  
	exampleBasicInputs;
	exampleInputWithACustomErrorStateMatcher;
	exampleAutoResizingTextarea;
	exampleInputWithAClearButton;
	exampleInputWithErrorMessages;
	exampleInputsInAForm;
	exampleInputWithHints;
	exampleInputsWithPrefixesAndSuffixes;
    formName: any;
    errorMessage: string;

    form1: FormGroup;
    selected_level: any;
    selected_class: any;
    selected_student: any;
    constructor(public _fb: FormBuilder,
        private LevelsDataService: LevelsDataService,
        private ClassesDataService: ClassesDataService,
        private StudentDataService: StudentDataService,
        private student_parent_meetingDataService: student_parent_meetingDataService,
       ) {
        this.form1 = this._fb.group({
            date: ['', [Validators.required]],
            selected_level: ['', [Validators.required]],
            selected_class: ['', [Validators.required]],
            selected_student: ['', [Validators.required]],
            reason: ['', [Validators.required]]       
        });
		
        
}
  
  
    todate: any;
 
	selectedjob: any;
	

	matcher = new MyErrorStateMatcher();
	value = 'Clear me';
	add_employee() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {

           
                date: this.date,
                level_name: this.level_name,
                level_id: Number(this.level_id),
                class_name: this.class_name,
                class_id: Number(this.class_id),
                student_id: Number(this.student_id),
                student_name: this.student_name,
                reason: this.reason,


            };
            console.log("asd", val)
            this.student_parent_meetingDataService.addstudent_parent_meeting(val).subscribe(res => {
               
                alert(res.toString());
            })
            console.log(val)
        }
      
	}
	job_id_from_function: any;
	job_name_from_function: any;
	job_selection(event) {
		this.job_id_from_function = event.source.value.job_id;
		this.job_name_from_function = event.source.value.job_name;
		console.log("selected job function", event.source.value.job_id, event)
	}
	update_employee() {
		
        var val = {
            id: Number(this.id),
            date: this.date,
            level_name: this.level_name,
            level_id: Number(this.level_id),
            class_name: this.class_name,
            class_id: Number(this.class_id),
            student_id: Number(this.student_id),
            student_name: this.student_name,
            reason: this.reason,
		};

		console.log("val", val);
      

        this.student_parent_meetingDataService.updatestudent_parent_meeting(val).subscribe(res => {
           
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
    cancel_employee() {
        this.form1.reset();
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	selecteddepartment: any;
	selectedsidedepartment: any;
    myControl = new FormControl('');
  //  options: string[];
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
    filteredstudent: Observable<any[]>;
    private _filter_student(value: string) {
        const filterValue = value.toLowerCase();
        return this.student.filter(option => option.student_name.toLowerCase().includes(filterValue));
    }
    displayFn_student(selectedoption) {
        return selectedoption ? selectedoption.student_name : undefined;
    }
   
    change_level(event)
    {
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
        this.StudentDataService.GetAllStudent_of_class(event.class_id).subscribe(data => this.student = data,
            error => console.log(error),
            () => {
                this.filteredstudent = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.student_name),
                        map(student_name => student_name ? this._filter_student(student_name) : this.student.slice())
                    );
                console.log("teststude", this.filteredstudent)
                //this.filteredList = this.country.slice();
                //console.log("ok", this.filteredList);
            });
    }
    change_student(event) {
        this.student_id= event.student_id
        this.student_name = event.student_name
    }
	ngOnInit() {
       
        this.LevelsDataService.GetAllLevels().subscribe(data => this.level = data,
            error => console.log(error),
            () => {
                this.filteredlevel = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.lev_name),
                        map(lev_name => lev_name ? this._filter(lev_name) : this.level.slice())
                    );
                console.log("testlev", this.filteredlevel)
                //this.filteredList = this.country.slice();
                //console.log("ok", this.filteredList);
            });
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.student_parent_meetingDataService.aClickedEvent
			.subscribe((data: string) => {
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
                console.log("editemps", this.student_parent_meetingDataService.id)
                this.id = this.id;
                this.date = this.date;
                //this.level_name = this.level_name;
                //this.level_id = this.level_id;
                //this.class_name = this.class_name;
                //this.class_id = this.class_id;
                //this.student_id = this.student_id;
                //this.student_name = this.student_name;
                this.reason = this.reason;

                var selected_value_level= this.student_parent_meetingDataService.level_id;
                this.selected_level = this.level[this.level.findIndex(x => String(x.lev_id) === selected_value_level)];

                var selected_value_class = this.student_parent_meetingDataService.class_id;
                this.selected_class = this.class[this.class.findIndex(x => String(x.class_id) === selected_value_class)];


                var selected_value_student = this.student_parent_meetingDataService.student_id;
                this.selected_student = this.student[this.student.findIndex(x => String(x.student_id) === selected_value_student)];
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
		
		this.selectedjob = this.selectedjob;


	}
}
