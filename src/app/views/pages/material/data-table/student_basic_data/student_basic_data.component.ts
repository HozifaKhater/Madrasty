import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { Failure_casesDataService } from '../../../../../Services/Failure_casesDataService';

import { Failure_casesMaster, Failure_cases } from '../../../../../Failure_casesMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';
import { StudentMaster, Student } from '../../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import * as def from '../../../../../definationsMaster.Model';
import { PageEvent } from '@angular/material';
import moment from 'moment';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';

import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';

@Component({
    selector: 'kt-student_basic_data',
    templateUrl: './student_basic_data.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class student_basic_dataComponent implements OnInit {
	@Input() failure_data: any;

	fail_id: number;
	fail_lev: string = "";
	fail_class: string = "";
	fail_student: string = "";
	fail_nation: string = "";
	fail_mob: string = "";
	fail_birth: string = "";
	fail_date: string = "";
	fail_desc: string = "";
	fail_reason: string = "";
	fail_sub: string = "";
	fail_1: string = "";
	fail_2: string = "";
	fail_3: string = "";
    fail_4: string = "";
    selectednation: any;
    phone: any;
    emp_age_day: any;
    emp_age_month: any;
    emp_age_year: any;
	fail_end_year: string = "";
	fail_sit: string = "";
	fail_eff_date: string = "";
	fail_eff_results: string = "";
	fail_recomm: string = "";
    ser: string = "";
    student_id: string = "";
    student_name: string = "";
    previous_school: string = "";
    address: string = "";
    transition_between_schools: string = "";
    foreign_schools: string = "";
    student_history_notes: string = "";
    health_status: string = "";

	subjects: Subjects[];
	students: Student[];
	selectedstudent: any;
	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;
	selected_student_id: any;
	selected_student_name: any;
	nat: def.nat[];
	selectedsubject: any;

	exampleBasic;
	exampleConfig;

	length = 100;
	pageSize = 10;
	pageSizeOptions = [5, 10, 25, 100];

	// MatPaginator Output
	pageEvent: PageEvent;

	form1: FormGroup;
	constructor(private SubjectDataService: SubjectDataService, private Failure_casesDataService: Failure_casesDataService, private LevelsDataService: LevelsDataService, private StudentDataService: StudentDataService, private ClassesDataService: ClassesDataService, private EmployeeService: EmployeeDataService, public _fb: FormBuilder) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.classes));
		this.StudentDataService.GetAlldepartment().subscribe(data => this.students = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.students));
		this.SubjectDataService.GetAllSubject().subscribe(data => this.subjects = data,
			error => console.log(error),
			() => { console.log("department dropdown") });

		this.form1 = this._fb.group({
			selectedlevel: ['', [Validators.required]],
			selectedclass: ['', [Validators.required]],
			selectedstudent: ['', [Validators.required]],
			selectednation: ['', [Validators.required]],
			fail_mob: ['', [Validators.required]],
			fail_birth: ['', [Validators.required]],
			fail_date: ['', [Validators.required]],
            fail_desc: ['', [Validators.required]], 
            phone: ['', [Validators.required]],
            previous_school: ['', [Validators.required]],
            foreign_schools: ['', [Validators.required]],
            transition_between_schools: ['', [Validators.required]],
            student_history_notes: ['', [Validators.required]],
            address: ['', [Validators.required]]
           
			
		});

		EmployeeService.Getdefinations_with_scode("nat").subscribe(data => this.nat = data,
			error => console.log(error),
			() => console.log("ok"));
	}

	add_failure() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]

		var val = {

			fail_lev: this.selectedlevel.lev_name,
			fail_class: this.selectedclass.class_name,
			fail_student: this.selectedstudent.student_name,
			fail_nation: this.fail_nation,
			fail_mob: Number(this.fail_mob), 
			fail_birth: moment(this.fail_birth).format('DD/MM/YYYY'),
			fail_date: moment(this.fail_date).format('DD/MM/YYYY'),
			fail_desc: this.fail_desc,
			fail_reason: this.fail_reason,
			fail_sub: this.selectedsubject.subject_name,
			fail_1: Number(this.fail_1), 
			fail_2: Number(this.fail_2), 
			fail_3: Number(this.fail_3), 
			fail_4: Number(this.fail_4), 
			fail_end_year: Number(this.fail_end_year),
			fail_sit: this.fail_sit,
			fail_eff_date: this.fail_eff_date,
			fail_eff_results: this.fail_eff_results,
			fail_recomm: this.fail_recomm
		};
		console.log("asd", val)
		this.Failure_casesDataService.addFailure_cases(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	
}
	
	

	//corridorsDataService: corridorsDataService;
	update_failure() {

			
		var val = {
			fail_id: Number(this.fail_id),
			fail_lev: this.selectedlevel.lev_name,
			fail_class: this.selectedclass.class_name,
			fail_student: this.selectedstudent.student_name,
			fail_nation: this.fail_nation,
			fail_mob: Number(this.fail_mob),
			fail_birth: moment(this.fail_birth).format('DD/MM/YYYY'),
			fail_date: moment(this.fail_date).format('DD/MM/YYYY'),
			fail_desc: this.fail_desc,
			fail_reason: this.fail_reason,
			fail_sub: this.selectedsubject.subject_name,
			fail_1: Number(this.fail_1),
			fail_2: Number(this.fail_2),
			fail_3: Number(this.fail_3),
			fail_4: Number(this.fail_4),
			fail_end_year: Number(this.fail_end_year),
			fail_sit: this.fail_sit,
			fail_eff_date: this.fail_eff_date,
			fail_eff_results: this.fail_eff_results,
			fail_recomm: this.fail_recomm
		};

		console.log("val", val);


		this.Failure_casesDataService.updateFailure_cases(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_failure() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Failure_casesDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.fail_id = Number(this.Failure_casesDataService.fail_id);

				this.fail_lev = this.Failure_casesDataService.fail_lev;
				this.fail_class = this.Failure_casesDataService.fail_class;
				this.fail_student = this.Failure_casesDataService.fail_student;
				this.fail_nation = this.Failure_casesDataService.fail_nation;
				this.fail_mob = this.Failure_casesDataService.fail_mob;
				this.fail_birth = this.Failure_casesDataService.fail_birth;
				this.fail_date = this.Failure_casesDataService.fail_date;
				this.fail_desc = this.Failure_casesDataService.fail_desc;
				this.fail_reason = this.Failure_casesDataService.fail_reason;
				this.fail_sub = this.Failure_casesDataService.fail_sub;
				this.fail_1 = this.Failure_casesDataService.fail_1;
				this.fail_2 = this.Failure_casesDataService.fail_2;
				this.fail_3 = this.Failure_casesDataService.fail_3;
				this.fail_4 = this.Failure_casesDataService.fail_4;
				this.fail_end_year = this.Failure_casesDataService.fail_end_year;
				this.fail_sit = this.Failure_casesDataService.fail_sit;
				this.fail_eff_date = this.Failure_casesDataService.fail_eff_date;
				this.fail_eff_results = this.Failure_casesDataService.fail_eff_results;
				this.fail_recomm = this.Failure_casesDataService.fail_recomm;

			});
		var test1


		this.fail_id = this.fail_id;
		this.fail_lev = this.fail_lev;
		this.fail_class = this.fail_class;
		this.fail_student = this.fail_student;
		this.fail_nation = this.fail_nation;
		this.fail_mob = this.fail_mob;
		this.fail_birth = this.fail_birth;
		this.fail_date = this.fail_date;
		this.fail_desc = this.fail_desc;
		this.fail_reason = this.fail_reason;
		this.fail_sub = this.fail_sub;
		this.fail_1 = this.fail_1;
		this.fail_2 = this.fail_2;
		this.fail_3 = this.fail_3;
		this.fail_4 = this.fail_4;
		this.fail_end_year = this.fail_end_year;
		this.fail_sit = this.fail_sit;
		this.fail_eff_date = this.fail_eff_date;
		this.fail_eff_results = this.fail_eff_results;
		this.fail_recomm = this.fail_recomm;

	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
}
