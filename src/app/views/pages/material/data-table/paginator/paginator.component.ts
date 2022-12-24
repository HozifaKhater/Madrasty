import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { AbsenceDataService } from '../../../../../Services/AbsenceDataService';

import { AbsenceMaster, Absence } from '../../../../../AbsenceMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';
import { StudentMaster, Student } from '../../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';

import { PageEvent } from '@angular/material';
import moment from 'moment';



@Component({
	selector: 'kt-paginator',
	templateUrl: './paginator.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
	@Input() absence_data: any;
	absence_id: number;
	absence_lev: string = "";
	absence_class: string = "";
	absence_date: string = "";
	absence_student_id: number;
	absence_student_name: string = "";


	students: Student[];
	selectedstudent: any;
	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;
	selected_student_id: any;
	selected_student_name: any;

	exampleBasic;
	exampleConfig;

	length = 100;
	pageSize = 10;
	pageSizeOptions = [5, 10, 25, 100];

	// MatPaginator Output
	pageEvent: PageEvent;

	constructor(private AbsenceDataService: AbsenceDataService,private LevelsDataService: LevelsDataService, private StudentDataService: StudentDataService, private ClassesDataService: ClassesDataService) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.classes));
		this.StudentDataService.GetAlldepartment().subscribe(data => this.students = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.students));
	}

	add_absence() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]


	
		
			for (let i = 0; i < this.selectedstudent.length; i++) {


				this.selected_student_id = Number(this.selectedstudent[i].student_id),
					this.selected_student_name = this.selectedstudent[i].student_name


				var val = {

					absence_student_id: this.selected_student_id,
					absence_student_name: this.selected_student_name,
					absence_lev: this.selectedlevel.lev_name,
					absence_class: this.selectedclass.class_name,
					absence_date: moment(this.absence_date).format('DD/MM/YYYY')


					//absence_student_id: this.selectedstudent.student_id,
					//absence_student_name: this.selectedstudent.student_name
				};

				this.AbsenceDataService.addAbsence(val).subscribe(res => { console.log("val", val) })
			}
	
}
	
	

	//corridorsDataService: corridorsDataService;
	update_absence() {

			
			for (let i = 0; i < this.selectedstudent.length; i++) {

				this.selected_student_id = Number(this.selectedstudent[i].student_id),
					this.selected_student_name = this.selectedstudent[i].student_name

				var val = {
					absence_id: this.absence_id,
					absence_student_id: this.selected_student_id,
					absence_student_name: this.selected_student_name,
					absence_lev: this.selectedlevel.lev_name,
					absence_class: this.selectedclass.class_name,
					absence_date: moment(this.absence_date).format('DD/MM/YYYY')


					//absence_student_id: this.selectedstudent.student_id,
					//absence_student_name: this.selectedstudent.student_name
				};
				this.AbsenceDataService.updateAbsence(val).subscribe(res => { console.log("val", val) })
			}


		console.log("val", val);


		this.AbsenceDataService.updateAbsence(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_absence() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.AbsenceDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.absence_id = Number(this.AbsenceDataService.absence_id);

				this.absence_lev = this.AbsenceDataService.absence_lev;
				this.absence_class = this.AbsenceDataService.absence_class;
				this.absence_date = this.AbsenceDataService.absence_date;
				this.absence_student_id = this.AbsenceDataService.absence_student_id;
				this.absence_student_name = this.AbsenceDataService.absence_student_name;

			});
		var test1

		this.absence_id = this.absence_id;
		this.absence_lev = this.absence_lev;
		this.absence_class = this.absence_class;
		this.absence_date = this.absence_date;
		this.absence_student_id = this.absence_student_id;
		this.absence_student_name = this.absence_student_name;
	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
}
