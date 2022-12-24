import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { Excellent_studentsDataService } from '../../../../../Services/Excellent_studentsDataService';

import { Excellent_studentsMaster, Excellent_students } from '../../../../../Excellent_studentsModel.Master';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';
import { StudentMaster, Student } from '../../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import * as def from '../../../../../definationsMaster.Model';
import { PageEvent } from '@angular/material';
import moment from 'moment';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';

@Component({
	selector: 'kt-excellent-students',
	templateUrl: './excellent-students.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcellentstudentsComponent implements OnInit {
	@Input() absence_data: any;
	exc_stu_id: number;
	exc_stu_lev: string = "";
	exc_stu_clas: string = "";
	exc_stu_name: string = "";
	exc_stu_nation: string = "";
	exc_stu_mob: number;
	exc_stu_birth: string = "";
	exc_stu_notes: string = "";
	exc_stu_eff: string = "";

	students: Student[];
	selectedstudent: any;
	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;
	selected_student_id: any;
	selected_student_name: any;
	nat: def.nat[];

	exampleBasic;
	exampleConfig;

	length = 100;
	pageSize = 10;
	pageSizeOptions = [5, 10, 25, 100];

	// MatPaginator Output
	pageEvent: PageEvent;

	form1: FormGroup;
	constructor(private Excellent_studentsDataService: Excellent_studentsDataService, private LevelsDataService: LevelsDataService, private StudentDataService: StudentDataService, private ClassesDataService: ClassesDataService, private EmployeeService: EmployeeDataService, public _fb: FormBuilder) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.classes));
		this.StudentDataService.GetAlldepartment().subscribe(data => this.students = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.students));

		this.form1 = this._fb.group({
			selectedlevel: ['', [Validators.required]],
			selectedclass: ['', [Validators.required]],
			selectedstudent: ['', [Validators.required]],
			selectedjob: ['', [Validators.required]],
			exc_stu_mob: ['', [Validators.required]],
			exc_stu_birth: ['', [Validators.required]],
			exc_stu_notes: ['', [Validators.required]],
			exc_stu_eff: ['', [Validators.required]]

		});

		EmployeeService.Getdefinations_with_scode("nat").subscribe(data => this.nat = data,
			error => console.log(error),
			() => console.log("ok"));
	}
    selectedjob: any;
	add_excstu() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]

		var val = {

			exc_stu_lev: this.selectedlevel.lev_name,
			exc_stu_clas: this.selectedclass.class_name,
			//exc_stu_name: this.selectedstudent.student_name,
			exc_stu_nation: this.exc_stu_nation,
			exc_stu_mob: Number(this.exc_stu_mob), 
			exc_stu_birth: moment(this.exc_stu_birth).format('DD/MM/YYYY'),
			exc_stu_notes: this.exc_stu_notes,
			exc_stu_eff: this.exc_stu_eff

		};
		console.log("asd", val)
		this.Excellent_studentsDataService.addExcellent_students(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	
}
	
	

	//corridorsDataService: corridorsDataService;
	update_excstu() {

			
		var val = {
			exc_stu_id: this.exc_stu_id,
			exc_stu_lev: this.selectedlevel.lev_name,
			exc_stu_clas: this.selectedclass.class_name,
			//exc_stu_name: this.selectedstudent.student_name,
			exc_stu_nation: this.exc_stu_nation,
			exc_stu_mob: Number(this.exc_stu_mob),
			exc_stu_birth: moment(this.exc_stu_birth).format('DD/MM/YYYY'),
			exc_stu_notes: this.exc_stu_notes,
			exc_stu_eff: this.exc_stu_eff
		};

		console.log("val", val);


		this.Excellent_studentsDataService.updateExcellent_students(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_excstu() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Excellent_studentsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.exc_stu_id = Number(this.Excellent_studentsDataService.exc_stu_id);

				this.exc_stu_lev = this.Excellent_studentsDataService.exc_stu_lev;
				this.exc_stu_clas = this.Excellent_studentsDataService.exc_stu_clas;
				this.exc_stu_name = this.Excellent_studentsDataService.exc_stu_name;
				this.exc_stu_nation = this.Excellent_studentsDataService.exc_stu_nation;
				this.exc_stu_mob = Number(this.Excellent_studentsDataService.exc_stu_mob);
				this.exc_stu_birth = this.Excellent_studentsDataService.exc_stu_birth;
				this.exc_stu_notes = this.Excellent_studentsDataService.exc_stu_notes;
				this.exc_stu_eff = this.Excellent_studentsDataService.exc_stu_eff;
			});
		var test1

		this.exc_stu_id = this.exc_stu_id;
		this.exc_stu_lev = this.exc_stu_lev;
		this.exc_stu_clas = this.exc_stu_clas;
		this.exc_stu_name = this.exc_stu_name;
		this.exc_stu_nation = this.exc_stu_nation;
		this.exc_stu_mob = Number(this.exc_stu_mob);
		this.exc_stu_birth = this.exc_stu_birth;
		this.exc_stu_notes = this.exc_stu_notes;
		this.exc_stu_eff = this.exc_stu_eff;
	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
}
