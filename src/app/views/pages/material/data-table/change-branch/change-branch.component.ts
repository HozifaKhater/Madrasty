import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { AbsenceDataService } from '../../../../../Services/AbsenceDataService';

import { AbsenceMaster, Absence } from '../../../../../AbsenceMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';
import { StudentMaster, Student } from '../../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import * as def from '../../../../../definationsMaster.Model';
import { PageEvent } from '@angular/material';
import moment from 'moment';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
	selector: 'kt-changebranch',
	templateUrl: './change-branch.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class chnagebranchComponent implements OnInit {
	@Input() absence_data: any;
	student_id: number;
	student_branch: string = "";

	level_name: string = "";
	level_id: string = "";
	class_name: string = "";
	class_id: string = "";

	student_name: string = "";

	level: Levels[];
	class: Classes[];
	student: Student[];


	branch: def.branch[];

	form1: FormGroup;
	selected_level: any;
	selected_class: any;
	selected_student: any;
	myControl = new FormControl('');
	exampleBasic;
	exampleConfig;

	length = 100;
	pageSize = 10;
	pageSizeOptions = [5, 10, 25, 100];

	// MatPaginator Output
	pageEvent: PageEvent;

	constructor(public _fb: FormBuilder,
		private LevelsDataService: LevelsDataService,
		private ClassesDataService: ClassesDataService,
		private StudentDataService: StudentDataService,
		private EmployeeService: EmployeeDataService
) {
		this.form1 = this._fb.group({
			selected_level: ['', [Validators.required]],
			selected_class: ['', [Validators.required]],
			selected_student: ['', [Validators.required]],
			student_branch: ['', [Validators.required]]
		});

		EmployeeService.Getdefinations_with_scode("branch").subscribe(data => this.branch = data,
			error => console.log(error),
			() => console.log("ok"));

	}

	update_branch() {

		var val = {
			student_id: Number(this.student_id),
			student_branch: this.student_branch,
		};

		console.log("val", val);


		this.StudentDataService.update_student_branch(val).subscribe(res => {

			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	
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
		this.student_id = event.student_id
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
				console.log("testlev", this.filteredlevel,this.level)
				//this.filteredList = this.country.slice();
				//console.log("ok", this.filteredList);
			});

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.StudentDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.student_id = Number(this.StudentDataService.student_id);

				this.student_branch = this.StudentDataService.student_branch;


			});
		var test1

		this.student_id = this.student_id;
		this.student_branch = this.student_branch;

	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
}
