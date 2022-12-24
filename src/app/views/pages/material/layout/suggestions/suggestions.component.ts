import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { ta7dier_masterDataService } from '../../../../../Services/Ta7dier_masterDataService';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { Ta7dier, Ta7dier_masterMaster } from '../../../../../Ta7dier_masterMaster.Model';
import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import * as def from '../../../../../definationsMaster.Model';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { SuggestionsMaster, Suggestions } from '../../../../../SuggestionsMaster.Model';
import { SuggestionsDataService } from '../../../../../Services/SuggestionsDataService';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';

@Component({
	selector: 'kt-sugg',
	templateUrl: './suggestions.component.html',
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
export class SuggestionsComponent implements OnInit {
	breadCrumbItems: Array<{}>;


	sugg: def.sugg[];
	form1: FormGroup;

	public Editor = ClassicEditor;
	@ViewChild("myEditor", { static: false }) myEditor: any;
	@Input() ta7dier_master_data: any;
	sugg_id: number;
	sugg_body: string;
	sugg_title: string = "";
	sugg_file: string = "";
	sugg_type: string = "";

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
	constructor(private SuggestionsDataService: SuggestionsDataService, public _fb: FormBuilder, private EmployeeService: EmployeeDataService) {
		this.form1 = this._fb.group({
			sugg_body: ['', [Validators.required]],
			sugg_type: ['', [Validators.required]],
			sugg_title: ['', [Validators.required]],
			sugg_file: ['', [Validators.required]]
		});

		EmployeeService.Getdefinations_with_scode("sugg").subscribe(data => this.sugg = data,
			error => console.log(error),
			() => console.log("ok"));

	}
	add_sugg() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			sugg_body: this.sugg_body,
			sugg_title: this.sugg_title,
			sugg_file: this.sugg_file,
			sugg_type: this.sugg_type
		
	


		};
		console.log("asd", val, this.selectedsubject)
		this.SuggestionsDataService.addSuggestions(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	SuggestionsMaster: SuggestionsMaster[];

	udpate_sugg() {


		var val = {
			sugg_id: Number(this.sugg_id),
			sugg_body: this.sugg_body,
			sugg_title: this.sugg_title,
			sugg_file: this.sugg_file,
			sugg_type: this.sugg_type
			
		};

		console.log("val", val);


		this.SuggestionsDataService.updateSuggestions(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_sugg() {
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

		this.SuggestionsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("zzzzzzz", this.SuggestionsDataService);
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				
				this.sugg_id = Number(this.SuggestionsDataService.sugg_id);
				
				this.sugg_body = this.SuggestionsDataService.sugg_body;
				this.sugg_title = this.SuggestionsDataService.sugg_title;
				this.sugg_file = this.SuggestionsDataService.sugg_file;
				this.sugg_type = this.SuggestionsDataService.sugg_type;
		


			
				console.log("edited")

			});
		this.sugg_id = this.sugg_id;
		this.sugg_body = this.sugg_body;
		this.sugg_title = this.sugg_title;
		this.sugg_file = this.sugg_file;
		this.sugg_type = this.sugg_type;

		this.data = this.data;
		this.selectedsubject = this.selectedsubject;
		this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Editor', active: true }];
	}
}
