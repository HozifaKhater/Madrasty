import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
import { Good_bad_students_cardDataService } from '../../../../../Services/Good_bad_students_cardDataService';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';
import { Levels, LevelsMaster } from '../../../../../LevelsMaster.Model';
import { Classes, ClassesMaster } from '../../../../../ClassesMaster.Model';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'kt-list',
	templateUrl: './list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.mat-list-icon {
		color: rgba(0, 0, 0, 0.54);
	  }
	`],
	providers: [Good_bad_students_cardDataService]
})
export class ListComponent implements OnInit {
	@Input() good_bad_students_card_data: any;
	student_card_id: number;
	good_card_id: string;
	bad_card_id: string = "";
	grade_id: string = "";
	garde_name: string = "";
	class_id: string;
	class_name: string = "";
	subject_id: string = "";
	subject_name: string = "";
	student_id: string;
	student_name: string = "";
	good_ebda3: string = "";
	good_tahfeez: string = "";
	good_result: string;
	bad_da3f: string = "";
	bad_da3f_reasons: string = "";
	bad_cure_ways: string = "";
	bad_result: string = "";

	exampleBasicList;
	exampleListWithSelection;
	exampleListWithSection;
	foods = [
		{ value: 'الأول', viewValue: 'الأول' },
		{ value: 'الثاني', viewValue: 'الثاني' },
		{ value: 'الثالث', viewValue: 'الثالث' }
	];
	folders = [
		{
			name: 'Photos',
			updated: new Date('1/1/16'),
		},
		{
			name: 'Recipes',
			updated: new Date('1/17/16'),
		},
		{
			name: 'Work',
			updated: new Date('1/28/16'),
		}
	];
	notes = [
		{
			name: 'Vacation Itinerary',
			updated: new Date('2/20/16'),
		},
		{
			name: 'Kitchen Remodel',
			updated: new Date('1/18/16'),
		}
	];
	typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    subjects: Subjects[];
    level: Levels[];
    class: Classes[];
    form1: FormGroup;
    constructor(private ClassesDataService: ClassesDataService, private LevelsDataService: LevelsDataService, public _fb: FormBuilder,private Good_bad_students_cardService: Good_bad_students_cardDataService, private SubjectDataService: SubjectDataService) {
        this.form1 = this._fb.group({
            selectedsubject: ['', [Validators.required]],
            selected_levels: ['', [Validators.required]],
            selected_class: ['', [Validators.required]],
            student_name: ['', [Validators.required]],
            bad_da3f: ['', [Validators.required]],
            bad_da3f_reasons: ['', [Validators.required]],
            bad_cure_ways: ['', [Validators.required]],
            good_result: ['', [Validators.required]]
        });
        this.SubjectDataService.GetAllSubject().subscribe(data => this.subjects = data,
			error => console.log(error),
            () => { console.log("department dropdown") });
        this.ClassesDataService.GetAllClasses().subscribe(data => this.class = data,
            error => console.log(error),
            () => { console.log("department dropdown") });

        this.LevelsDataService.GetAllLevels().subscribe(data => this.level = data,
            error => console.log(error),
            () => { console.log("department dropdown") });}
	add_good_bad_students_card() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {

                good_card_id: this.good_card_id,
                bad_card_id: Number(this.bad_card_id),
                grade_id: Number(this.grade_id),
                garde_name: this.garde_name,
                class_id: this.class_id,
                class_name: this.class_name,
                subject_id: Number(this.subject_id),
                subject_name: this.subject_name,
                student_id: this.student_id,
                student_name: this.student_name,
                good_ebda3: this.good_ebda3,
                good_tahfeez: this.good_tahfeez,
                good_result: this.good_result,
                bad_da3f: this.bad_da3f,
                bad_da3f_reasons: this.bad_da3f_reasons,
                bad_cure_ways: this.bad_cure_ways,
                bad_result: this.bad_result


            };
            console.log("asd", val)
            this.Good_bad_students_cardService.addGood_bad_students_card(val).subscribe(res => {
                alert(res.toString());
            })
            console.log(val)
            this.form1.reset();
        }
	}

	update_goodbadstudents() {

    /*console.log("emp", emp, this.employeedepartment );*/
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {

                student_card_id: this.student_card_id,
                good_card_id: this.good_card_id,
                bad_card_id: this.bad_card_id,
                grade_id: this.grade_id,
                garde_name: this.garde_name,
                class_id: this.class_id,
                class_name: this.class_name,
                subject_id: this.subject_id,
                subject_name: this.subject_name,
                student_id: this.student_id,
                student_name: this.student_name,
                good_ebda3: this.good_ebda3,
                good_tahfeez: this.good_tahfeez,
                good_result: this.good_result,
                bad_da3f: this.bad_da3f,
                bad_da3f_reasons: this.bad_da3f_reasons,
                bad_cure_ways: this.bad_cure_ways,
                bad_result: this.bad_result




            };

            console.log("val", val);


            this.Good_bad_students_cardService.updateGood_bad_students_card(val).subscribe(res => {
                alert(res.toString());
                this.form1.reset();
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            })
        }
	}
    cancel_goodbadstudents() {
        this.form1.reset();
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Good_bad_students_cardService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

				this.student_card_id = Number(this.Good_bad_students_cardService.student_card_id);
				this.good_card_id = this.Good_bad_students_cardService.good_card_id;
				this.bad_card_id = this.Good_bad_students_cardService.bad_card_id;
				this.grade_id = this.Good_bad_students_cardService.grade_id;
				this.garde_name = this.Good_bad_students_cardService.garde_name;
				this.class_id = this.Good_bad_students_cardService.class_id;
				this.class_name = this.Good_bad_students_cardService.class_name;
				this.subject_id = this.Good_bad_students_cardService.subject_id;
				this.subject_name = this.Good_bad_students_cardService.subject_name;
				this.student_id = this.Good_bad_students_cardService.student_id;
				this.student_name = this.Good_bad_students_cardService.student_name;
				this.good_ebda3 = this.Good_bad_students_cardService.good_ebda3;
				this.good_tahfeez = this.Good_bad_students_cardService.good_tahfeez;
				this.good_result = this.Good_bad_students_cardService.good_result;
				this.bad_da3f = this.Good_bad_students_cardService.bad_da3f;
				this.bad_da3f_reasons = this.Good_bad_students_cardService.bad_da3f_reasons;
				this.bad_cure_ways = this.Good_bad_students_cardService.bad_cure_ways;
				this.bad_result = this.Good_bad_students_cardService.bad_result;


				console.log("edited")

			});
		var test1

		this.student_card_id = this.student_card_id;
		this.good_card_id = this.good_card_id;
		this.bad_card_id = this.bad_card_id;
		this.grade_id = this.grade_id;
		this.garde_name = this.garde_name;
		this.class_id = this.class_id;
		this.class_name = this.class_name;
		this.subject_id = this.subject_id;
		this.subject_name = this.subject_name;
		this.student_id = this.student_id;
		this.student_name = this.student_name;
		this.good_ebda3 = this.good_ebda3;
		this.good_tahfeez = this.good_tahfeez;
		this.good_result = this.good_result;
		this.bad_da3f = this.bad_da3f;
		this.bad_da3f_reasons = this.bad_da3f_reasons;
		this.bad_cure_ways = this.bad_cure_ways;
		this.bad_result = this.bad_result;
	}
}
