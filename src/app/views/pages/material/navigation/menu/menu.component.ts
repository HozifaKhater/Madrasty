import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { Evaluation_itemsDataService } from '../../../../../Services/Evaluation_itemsDataService';
import { Evaluation_itemsMaster } from '../../../../../Evaluation_itemsMaster.Model';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';
import { FormBuilder } from '@angular/forms';


@Component({
	selector: 'kt-menu',
	templateUrl: './menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [Evaluation_itemsDataService]
})
export class MenuComponent implements OnInit {
	/*attemptedQuestionCount: any;*/



	@Input() Evaluation_items_data: any;
	buttons_takem: any
	selectedobject: any;
	selectedsubject: any;
    evaluation_id: number;
    field: any;
	evaluation_object: string = "";
	evaluation_object_name: string = "";
	evaluation_subject: string = "";
	evaluation_subject_id: string = "";
	Evaluation_item_id: string = "";
	Evaluation_item_name: string = "";
	Evaluation_appreciation: string = "";
	Evaluation_score: string = "";


	exampleBasicMenu;
	exampleNestedMenu;
	exampleMenuWithIcons;
	exampleToggling;
	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];
	gehat = [
		{ value: '1', viewValue: 'قسم' },
		{ value: '2', viewValue: 'موظف' },
		{ value: '3', viewValue: 'مدرس' }
	];
	subjects: Subjects[];
	constructor(private Evaluation_itemsService: Evaluation_itemsDataService, private SubjectDataService: SubjectDataService, private fb: FormBuilder) {
		this.SubjectDataService.GetAllSubject().subscribe(data => this.subjects = data,
			error => console.log(error),
			() => { console.log("department dropdown", this.subjects) });
	}




	add_Evaluation_items() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		for (let i = 0; i < this.fieldArray.length; i++) {
			var val = {

				evaluation_object: Number(this.evaluation_object),
				evaluation_object_name: this.evaluation_object_name,
				evaluation_subject: this.evaluation_subject,
				evaluation_subject_id: Number(this.evaluation_subject_id),
				Evaluation_item_id: Number(this.Evaluation_item_id),
				Evaluation_item_name: this.Evaluation_item_name,
				Evaluation_appreciation: this.fieldArray[i].name,
				Evaluation_score: Number(this.fieldArray[i].name1)

			};
				console.log("asd", val)
		this.Evaluation_itemsService.addEvaluation_items(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
		}

	
	}

	update_Evaluation_items() {

		/*console.log("emp", emp, this.employeedepartment );*/
		var val = {
			evaluation_id: Number(this.evaluation_id),
			evaluation_object: Number(this.evaluation_object),
			evaluation_object_name: this.evaluation_object_name,
			evaluation_subject: this.evaluation_subject,
			evaluation_subject_id: Number(this.evaluation_subject_id),
			Evaluation_item_id: Number(this.Evaluation_item_id),
			Evaluation_item_name: this.Evaluation_item_name,
			Evaluation_appreciation: this.Evaluation_appreciation,
			Evaluation_score: Number(this.Evaluation_score)

		};

		console.log("val", val);


		this.Evaluation_itemsService.updateEvaluation_items(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_Evaluation_items() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Evaluation_itemsService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.evaluation_id = Number(this.Evaluation_itemsService.evaluation_id);
				this.evaluation_object = this.Evaluation_itemsService.evaluation_object;
				this.evaluation_object_name = this.Evaluation_itemsService.evaluation_object_name;
				this.evaluation_subject = this.Evaluation_itemsService.evaluation_subject;
				this.evaluation_subject_id = this.Evaluation_itemsService.evaluation_subject_id;
				this.Evaluation_item_id = this.Evaluation_itemsService.evaluation_item_id;
				this.Evaluation_item_name = this.Evaluation_itemsService.evaluation_item_name;
				this.Evaluation_appreciation = this.Evaluation_itemsService.evaluation_appreciation;
				this.Evaluation_score = this.Evaluation_itemsService.evaluation_score;


			});
		var test1

		this.evaluation_id = this.evaluation_id;
		this.evaluation_object = this.evaluation_object;
		this.evaluation_object_name = this.evaluation_object_name;
		this.evaluation_subject = this.evaluation_subject;
		this.evaluation_subject_id = this.evaluation_subject_id;
		this.Evaluation_item_id = this.Evaluation_item_id;
		this.Evaluation_item_name = this.Evaluation_item_name;
		this.Evaluation_appreciation = this.Evaluation_appreciation;
		this.Evaluation_score = this.Evaluation_score;
		this.buttons_takem = this.buttons_takem;

	}
	fieldArray: Array<any> = [
		{
			name: '',
			name1: ''
		}
	];
	newAttribute: any = {};

	firstField = true;
	firstFieldName = 'First Item name';
	isEditItems: boolean;

	// candidates: any[] = [
	//   {
	//     'name': 'Default Name',
	//     'title': 'Job Title',
	//   },
	//   {
	//     'name': 'Default Name 2',
	//     'title': 'Job Title',
	//   }
	// ];

	addFieldValue(index) {
if (index !=0){
		this.fieldArray.push(this.newAttribute);
		console.log("zzzzz", this.fieldArray, this.newAttribute)
		this.newAttribute = {};
}
	}

	deleteFieldValue(index) {
		if (index != 0) {
			this.fieldArray.splice(index, 1);
			console.log("delete", index)
		}
	}
}
