import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { ta7dier_masterDataService } from '../../../../../Services/Ta7dier_masterDataService';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { Ta7dier, Ta7dier_masterMaster } from '../../../../../Ta7dier_masterMaster.Model';
import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
@Component({
	selector: 'kt-card',
	templateUrl: './card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-card {
		max-width: 400px;
	  }
	.example-header-image {
		background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
		background-size: cover;
	  }
	`]

})
export class CardComponent implements OnInit {
	breadCrumbItems: Array<{}>;

	public Editor = ClassicEditor;
	@ViewChild("myEditor", { static: false }) myEditor: any;
	@Input() ta7dier_master_data: any;
	ta7dier_id: number;
	emp_id: string;
	emp_name: string = "";
	subject_id: string = "";
	subject_name: string = "";
	grade_id: string;
	grade_name: string = "";
	ta7dier_date: string = "";
	ta7dier_week: string = "";
	ta7dier_day: string;
	ta7dier_state_id: string = "";
	state_name: string = "";
	ta7dier_name: string = "";
	ta7dier_body: string;
	ta7dier_notes: string = "";
	ta7dier_supervision_state_id: string = "";
	ta7dier_supervision_state_name: string = "";
	ta7dier_state_name: string = "";
	public onChange({ editor }: ChangeEvent) {
		const data = editor.getData();
		this.data = data;
	}
	exampleBasicCards;
	exampleCardWithTitle;
	examplBigExample;
	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];
	weeks = [
		{ value: '1', viewValue: 'اسبوع1' },
		{ value: '2', viewValue: 'اسبوع2' },
		{ value: '3', viewValue: 'اسبوع3' }
	];
	days = [
		{ value: '1', viewValue: 'يوم1' },
		{ value: '2', viewValue: 'يوم2' },
		{ value: '3', viewValue: 'يوم3' }
	];
	class = [
		{ value: '1', viewValue: 'صف1' },
		{ value: '2', viewValue: 'صف2' },
		{ value: '3', viewValue: 'صف3' }
	];
	subjects: Subjects[];
	selectedsubject: any;
	data: any;
	constructor(private ta7dier_masterDataService: ta7dier_masterDataService, private SubjectDataService: SubjectDataService) {
		this.SubjectDataService.GetAllSubject().subscribe(data => this.subjects = data,
			error => console.log(error),
			() => { console.log("department dropdown") });}
	add_ta7dier_master() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			emp_id: this.emp_id,
			emp_name: this.emp_name,
			subject_id: Number(this.selectedsubject.subject_id),
			subject_name: this.selectedsubject.subject_name,
			grade_id: this.grade_id,
			grade_name: this.grade_name,
			ta7dier_date: this.ta7dier_date,
			ta7dier_week: Number(this.ta7dier_week),
			ta7dier_day: this.ta7dier_day,
			ta7dier_state_id: Number(this.ta7dier_state_id),
			state_name: this.state_name,
			ta7dier_name: this.ta7dier_name,
			ta7dier_body: this.data,
			ta7dier_notes: this.ta7dier_notes,
			ta7dier_supervision_state_id: Number(this.ta7dier_supervision_state_id),
			ta7dier_supervision_state_name: this.ta7dier_supervision_state_name,
			ta7dier_state_name: this.ta7dier_state_name


		};
		console.log("asd", val, this.selectedsubject)
		this.ta7dier_masterDataService.addTa7dier_master(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	ta7diers: Ta7dier_masterMaster[];
	/*	ta7dier_masterDataService: ta7dier_masterDataService;*/
	bind_ta7diers(event) {
		this.ta7dier_masterDataService.subject_id = event.source.value.subject_id;
		this.ta7dier_masterDataService.BindClicked(event.source.value.subject_id);
	}
	udpate_ta7dier_master() {


		/*console.log("emp", emp, this.employeedepartment );*/
		var val = {
			ta7dier_id: Number(this.ta7dier_id),
			emp_id: Number(this.emp_id),
			emp_name: this.emp_name,
			subject_id: Number(this.selectedsubject.subject_id),
			subject_name: this.selectedsubject.subject_name,
			grade_id: Number(this.grade_id),
			grade_name: this.grade_name,
			ta7dier_date: this.ta7dier_date,
			ta7dier_week: Number(this.ta7dier_week),
			ta7dier_day: Number(this.ta7dier_day),
			ta7dier_state_id: Number(this.ta7dier_state_id),
			state_name: this.state_name,
			ta7dier_name: this.ta7dier_name,
			ta7dier_body: this.ta7dier_body,
			ta7dier_notes: this.ta7dier_notes,
			ta7dier_supervision_state_id: Number(this.ta7dier_supervision_state_id),
			ta7dier_supervision_state_name: this.ta7dier_supervision_state_name,
			ta7dier_state_name: this.ta7dier_state_name,
		};

		console.log("val", val);


		this.ta7dier_masterDataService.updateTa7dier_master(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_ta7dier_master() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/
/*		console.log("yyyyyyyyy", this.ta7dier_masterDataService);*/

		this.ta7dier_masterDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("zzzzzzz", this.ta7dier_masterDataService);
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				
				this.ta7dier_id = Number(this.ta7dier_masterDataService.ta7dier_id);
				
				this.emp_id = this.ta7dier_masterDataService.emp_id;
				this.emp_name = this.ta7dier_masterDataService.emp_name;
				//this.subject_id = this.ta7dier_masterDataService.subject_id;
				//this.subject_name = this.ta7dier_masterDataService.subject_name;
				this.grade_id = this.ta7dier_masterDataService.grade_id;
				this.grade_name = this.ta7dier_masterDataService.grade_name;
				this.ta7dier_date = this.ta7dier_masterDataService.ta7dier_date;
				this.ta7dier_week = this.ta7dier_masterDataService.ta7dier_week;
				this.ta7dier_day = this.ta7dier_masterDataService.ta7dier_day;
				this.ta7dier_state_id = this.ta7dier_masterDataService.ta7dier_state_id;
				this.state_name = this.ta7dier_masterDataService.state_name;
				this.ta7dier_name = this.ta7dier_masterDataService.ta7dier_name;
				this.data = this.ta7dier_masterDataService.ta7dier_body;
				this.ta7dier_notes = this.ta7dier_masterDataService.ta7dier_notes;
				this.ta7dier_supervision_state_id = this.ta7dier_masterDataService.ta7dier_supervision_state_id;
				this.ta7dier_supervision_state_name = this.ta7dier_masterDataService.ta7dier_supervision_state_name;
				this.ta7dier_state_name = this.ta7dier_masterDataService.ta7dier_state_name;

				console.log(this.ta7dier_masterDataService)
				var selected_value_emp = this.ta7dier_masterDataService.subject_id
			/*	console.log("asdadas", selected_value_emp, this.employees)*/
				this.selectedsubject = this.subjects[this.subjects.findIndex(function (el) {
					return String(el.subject_id) == selected_value_emp
				})];
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
		this.ta7dier_id = this.ta7dier_id;
		this.emp_id = this.emp_id;
		this.emp_name = this.emp_name;
		this.subject_id = this.subject_id;
		this.subject_name = this.subject_name;
		this.grade_id = this.grade_id;
		this.grade_name = this.grade_name;
		this.ta7dier_date = this.ta7dier_date;
		this.ta7dier_week = this.ta7dier_week;
		this.ta7dier_day = this.ta7dier_day;
		this.ta7dier_state_id = this.ta7dier_state_id;
		this.state_name = this.state_name;
		this.ta7dier_name = this.ta7dier_name;
		this.ta7dier_body = this.ta7dier_body;
		this.ta7dier_notes = this.ta7dier_notes;
		this.ta7dier_supervision_state_id = this.ta7dier_supervision_state_id;
		this.ta7dier_supervision_state_name = this.ta7dier_supervision_state_name;
		this.ta7dier_state_name = this.ta7dier_state_name;
		this.data = this.data;
		this.selectedsubject = this.selectedsubject;
		this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Editor', active: true }];
	}
}
