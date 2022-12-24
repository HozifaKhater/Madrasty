import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { Excellent_studentsDataService } from '../../../../../Services/Excellent_studentsDataService';

import { Excellent_studentsMaster, Excellent_students } from '../../../../../Excellent_studentsModel.Master';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';
import { Tests_metricMaster, Tests_metric } from '../../../../../Tests_metricMaster.Model';
import { Tests_metricDataService } from '../../../../../Services/Tests_metricDataService';
import * as def from '../../../../../definationsMaster.Model';
import { PageEvent } from '@angular/material';
import moment from 'moment';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';

@Component({
	selector: 'kt-tests_metric',
	templateUrl: './tests-metric.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsmetricComponent implements OnInit {
	@Input() absence_data: any;
	tests_id: number;
	tests_type: string = "";
	tests_date: string = "";
	tests_stu_no: number;



	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;

	nat: def.nat[];

	exampleBasic;
	exampleConfig;

	length = 100;
	pageSize = 10;
	pageSizeOptions = [5, 10, 25, 100];

	// MatPaginator Output
	pageEvent: PageEvent;

	form1: FormGroup;
	constructor(private Tests_metricDataService: Tests_metricDataService,public _fb: FormBuilder) {


		this.form1 = this._fb.group({
			tests_type: ['', [Validators.required]],
			tests_stu_no: ['', [Validators.required]],
			tests_date: ['', [Validators.required]]
		

		});


	}

	add_tests() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]

		var val = {

			tests_type: this.tests_type,
			tests_date: moment(this.tests_date).format('DD/MM/YYYY'),
			tests_stu_no: this.tests_stu_no
	

		};
		console.log("asd", val)
		this.Tests_metricDataService.addTests_metric(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	
}
	
	

	
	update_tests() {

			
		var val = {
			tests_id: this.tests_id,
			tests_type: this.tests_type,
			tests_date: moment(this.tests_date).format('DD/MM/YYYY'),
			tests_stu_no: this.tests_stu_no
		};

		console.log("val", val);


		this.Tests_metricDataService.updateTests_metric(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_tests() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Tests_metricDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.tests_id = Number(this.Tests_metricDataService.tests_id);

				this.tests_type = this.Tests_metricDataService.tests_type;
				this.tests_date = this.Tests_metricDataService.tests_date;
				this.tests_stu_no = this.Tests_metricDataService.tests_stu_no;
		
			});
		var test1

		this.tests_id = this.tests_id;
		this.tests_type = this.tests_type;
		this.tests_date = this.tests_date;
		this.tests_stu_no = this.tests_stu_no;

	}

	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}
}
