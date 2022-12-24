import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import moment from 'moment';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
  }

@Component({
	selector: 'kt-select',
	templateUrl: './select.component.html',
	styles: [`
	.example-additional-selection {
		opacity: 0.75;
		font-size: 0.75em;
	  }
	  .example-panel-red .mat-select-content {
		background: rgba(255, 0, 0, 0.5);
	  }
	  .example-panel-green .mat-select-content {
		background: rgba(0, 255, 0, 0.5);
	  }
	  .example-panel-blue .mat-select-content {
		background: rgba(0, 0, 255, 0.5);
	  }
	`]
})
export class SelectComponent implements OnInit {
	@Input() student_data: any;
	student_id: number;
	student_file_ser: number = 0;
	student_civilian_id: string = "";
	student_sex: string = "";
	student_sex_id: string;
	student_name: string = "";
	student_nationality: string = "";
	student_nationality_id: string;
	student_dob: string = "";
	student_age_year: string = "";
	student_age_month: string;
	student_age_day: string = "";
	student_acceptance_reason_id: string = "";
	student_acceptance_reason: string;
	student_religion: string = "";
	student_religion_id: string = "";
	student_district: string;
	student_district_id: string = "";
	student_school: string = "";
	student_stage: string;
	student_stage_id: string = "";
	student_state: string = "";
	student_state_id: string;
	student_study_state: string = "";
	student_study_state_id: string = "";
	student_grade: string;
	student_grade_id: string = "";
	student_div: string = "";
	student_div_id: string;
	student_failure_years: string = "";

	exampleBasicSelect;
	exampleSelectWith2WayValueBinding;
	exampleSelectInAForm;
	exampleSelectWithFormFieldFeature;
	exampleSelectWithResetOption;
	exampleSelectWithOptionGroups;
	exampleSelectWithMultipleSelection;
	exampleSelectWithCustomTriggerText;
	exampleSelectWithCustomPanelStyling;
	exampleSelectWithACustomErrorStateMatcher;

	toppings = new FormControl();
	toppings2 = new FormControl();
	panelColor = new FormControl('red');

  	toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
	toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];

	nationalities = [
		{ value: '1', viewValue: 'كويتي' },
		{ value: '2', viewValue: 'سعودي' },
		{ value: '3', viewValue: 'مصري' }
	];

	sexx = [
		{ value: '1', viewValue: 'ذكر' },
		{ value: '2', viewValue: 'أنثي' }

	];

	reasons = [
		{ value: '1', viewValue: 'سبب قبول1' },
		{ value: '2', viewValue: 'سبب قبول2' },
		{ value: '3', viewValue: 'سبب قبول3' }

	];

	rels = [
		{ value: '1', viewValue: 'مسلم' },
		{ value: '2', viewValue: 'مسيحي' }
	

	];

	regions = [
		{ value: '1', viewValue: 'منطقة1' },
		{ value: '2', viewValue: 'منطقة2' }


	];

	schools = [
		{ value: '1', viewValue: 'مدرسه1' },
		{ value: '2', viewValue: 'مدرسه2' }
	];

	stages = [
		{ value: '1', viewValue: 'مرحله1' },
		{ value: '2', viewValue: 'مرحله2' }
	];

	levels = [
		{ value: '1', viewValue: 'الصف الاول' },
		{ value: '2', viewValue: 'الصف الثاني' }
	];

	majors = [
		{ value: '1', viewValue: 'شعبة علمية' },
		{ value: '2', viewValue: 'شعبة أدبية' }
	]; 
	stats = [
		{ value: '1', viewValue: 'الحالة الدراسية1' },
		{ value: '2', viewValue: 'الحالة الدراسية2' }
	];
	statuss = [
		{ value: '1', viewValue: 'جيد' },
		{ value: '2', viewValue: ' ضعيف' }
	];


	states = [
		'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
		'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
		'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
		'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
		'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
		'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
		'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
	];
	selected = 'option2';

	selectedValue: string;

	pokemonControl = new FormControl();

	pokemonGroups = [
		{
			name: 'Grass',
			pokemon: [
				{ value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
				{ value: 'oddish-1', viewValue: 'Oddish' },
				{ value: 'bellsprout-2', viewValue: 'Bellsprout' }
			]
		},
		{
			name: 'Water',
			pokemon: [
				{ value: 'squirtle-3', viewValue: 'Squirtle' },
				{ value: 'psyduck-4', viewValue: 'Psyduck' },
				{ value: 'horsea-5', viewValue: 'Horsea' }
			]
		},
		{
			name: 'Fire',
			disabled: true,
			pokemon: [
				{ value: 'charmander-6', viewValue: 'Charmander' },
				{ value: 'vulpix-7', viewValue: 'Vulpix' },
				{ value: 'flareon-8', viewValue: 'Flareon' }
			]
		},
		{
			name: 'Psychic',
			pokemon: [
				{ value: 'mew-9', viewValue: 'Mew' },
				{ value: 'mewtwo-10', viewValue: 'Mewtwo' },
			]
		}
	];

	animalControl = new FormControl('', [Validators.required]);

	animals = [
		{ name: 'Dog', sound: 'Woof!' },
		{ name: 'Cat', sound: 'Meow!' },
		{ name: 'Cow', sound: 'Moo!' },
		{ name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
	];

	selected2 = new FormControl('valid', [
		Validators.required,
		Validators.pattern('valid'),
	]);

	matcher = new MyErrorStateMatcher();
    start_date: any;
    constructor(private StudentDataService: StudentDataService) {
        this.StudentDataService.get_start_date().subscribe(data => this.start_date = data,
            error => console.log(error),
            () => console.log("okstart date", this.start_date.start_year_date));
    }
	add_student() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			student_file_ser: Number(this.student_file_ser),
			student_civilian_id: this.student_civilian_id,
			student_sex: this.student_sex,
			student_sex_id: this.student_sex_id,
			student_name: this.student_name,
			student_nationality: this.student_nationality,
			student_nationality_id: this.student_nationality_id,
			student_dob: this.student_dob,
			student_age_year: Number(this.student_age_year),
			student_age_month: Number(this.student_age_month),
			student_age_day: Number(this.student_age_day),
			student_acceptance_reason_id: Number(this.student_acceptance_reason_id),
			student_acceptance_reason: this.student_acceptance_reason,
			student_religion: this.student_religion,
			student_religion_id: Number(this.student_religion_id),
			student_district: this.student_district,
			student_district_id: Number(this.student_district_id),
			student_school: this.student_school,
			student_stage: this.student_stage,
			student_stage_id: Number(this.student_stage_id),
			student_state: this.student_state,
			student_state_id: this.student_state_id,
			student_study_state: this.student_study_state,
			student_study_state_id: Number(this.student_study_state_id),
			student_grade: this.student_grade,
			student_grade_id: Number(this.student_grade_id),
			student_div: this.student_div,
			student_div_id: this.student_div_id,
			student_failure_years: Number(this.student_failure_years)

		};
        console.log("asd", val)
        //function getAge(fromdate , todate) {
        //    if (todate) todate = new Date(todate);
        //    else todate = new Date();
        //    var fromdate:any = new Date(fromdate);
        //    var age = [], 
        //        y = [todate.getFullYear(), fromdate.getFullYear()],
        //        ydiff = y[0] - y[1],
        //        m = [todate.getMonth(), fromdate.getMonth()],
        //        mdiff = m[0] - m[1],
        //        d = [todate.getDate(), fromdate.getDate()],
        //        ddiff = d[0] - d[1];

        //    if (mdiff < 0 || (mdiff === 0 && ddiff < 0))--ydiff;
        //    if (mdiff < 0) mdiff += 12;
        //    if (ddiff < 0) {
        //        fromdate.setMonth(m[1] + 1, 0);
        //        ddiff = fromdate.getDate() - d[1] + d[0];
        //        --mdiff;
        //    }
        //    if (ydiff >= 0) this.student_age_year = ydiff;
        //    if (mdiff >= 0) this.student_age_month = mdiff;
        //    if (ddiff >= 0) this.student_age_day = ddiff;
        //    //if (age.length > 1) age.splice(age.length - 1, 0, ' and ');
        //    console.log("calced,", age.join(''), age)
        //    return age.join('');
        //}

         
		this.StudentDataService.addstudents(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
    }
    todate: any;
    updateCalcs(event) {
     //   console.log("age", moment(this.student_dob).format('DD-MM-YYYY'), this.start_date[0].start_year_date, "brrrrrr", getAge("08-28-2000", "9-15-2022"))
        fromdate = moment(event).format('MM-DD-YYYY')
        this.todate = this.start_date[0].start_year_date
        if (this.todate) this.todate = new Date(this.todate);
        else this.todate = new Date();
        var fromdate: any = new Date(fromdate);
        var age = [],
            y = [this.todate.getFullYear(), fromdate.getFullYear()],
            ydiff = y[0] - y[1],
            m = [this.todate.getMonth(), fromdate.getMonth()],
            mdiff = m[0] - m[1],
            d = [this.todate.getDate(), fromdate.getDate()],
            ddiff = d[0] - d[1];

        if (mdiff < 0 || (mdiff === 0 && ddiff < 0))--ydiff;
        if (mdiff < 0) mdiff += 12;
        if (ddiff < 0) {
            fromdate.setMonth(m[1] + 1, 0);
            ddiff = fromdate.getDate() - d[1] + d[0];
            --mdiff;
        }
        if (ydiff >= 0) this.student_age_year = String(ydiff);
        if (mdiff >= 0) this.student_age_month = String(mdiff);
        if (ddiff >= 0) this.student_age_day = String(ddiff);
        console.log("ageee", String(ydiff), String(mdiff), String(ddiff),event, moment(event).format('DD-MM-YYYY'), this.start_date[0].start_year_date)
    }

	update_student() {
		var val = {
			student_id: Number(this.StudentDataService.student_id),
			student_file_ser: Number(this.student_file_ser),
			student_civilian_id: this.student_civilian_id,
			student_sex: this.student_sex,
			student_sex_id: this.student_sex_id,
			student_name: this.student_name,
			student_nationality: this.student_nationality,
			student_nationality_id: this.student_nationality_id,
			student_dob: this.student_dob,
			student_age_year: Number(this.student_age_year),
			student_age_month: Number(this.student_age_month),
			student_age_day: Number(this.student_age_day),
			student_acceptance_reason_id: Number(this.student_acceptance_reason_id),
			student_acceptance_reason: this.student_acceptance_reason,
			student_religion: this.student_religion,
			student_religion_id: Number(this.student_religion_id),
			student_district: this.student_district,
			student_district_id: Number(this.student_district_id),
			student_school: this.student_school,
			student_stage: this.student_stage,
			student_stage_id: Number(this.student_stage_id),
			student_state: this.student_state,
			student_state_id: this.student_state_id,
			student_study_state: this.student_study_state,
			student_study_state_id: Number(this.student_study_state_id),
			student_grade: this.student_grade,
			student_grade_id: Number(this.student_grade_id),
			student_div: this.student_div,
			student_div_id: this.student_div_id,
			student_failure_years: Number(this.student_failure_years)

		};

		console.log("val", val);


		this.StudentDataService.updatestudents(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_student() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.StudentDataService.aClickedEvent
			.subscribe((data: string) => {
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
	
				this.student_id = Number(this.StudentDataService.student_id);
				this.student_file_ser = Number(this.StudentDataService.student_file_ser);
				this.student_civilian_id = this.StudentDataService.student_civilian_id;
				this.student_sex = this.StudentDataService.student_sex;
				this.student_sex_id = this.StudentDataService.student_sex_id;
				this.student_name = this.StudentDataService.student_name;
				this.student_nationality = this.StudentDataService.student_nationality;
				this.student_nationality_id = this.StudentDataService.student_nationality_id;
				this.student_dob = this.StudentDataService.student_dob;
				this.student_age_year = this.StudentDataService.student_age_year;
				this.student_age_month = this.StudentDataService.student_age_month;
				this.student_age_day = this.StudentDataService.student_age_day;
				this.student_acceptance_reason_id = this.StudentDataService.student_acceptance_reason_id;
				this.student_acceptance_reason = this.StudentDataService.student_acceptance_reason;
				this.student_religion = this.StudentDataService.student_religion;
				this.student_religion_id = this.StudentDataService.student_religion_id;
				this.student_district = this.StudentDataService.student_district;
				this.student_district_id = this.StudentDataService.student_district_id;
				this.student_school = this.StudentDataService.student_school;
				this.student_stage = this.StudentDataService.student_stage;
				this.student_stage_id = this.StudentDataService.student_stage_id;
				this.student_state = this.StudentDataService.student_state;
				this.student_state_id = this.StudentDataService.student_state_id;
				this.student_study_state = this.StudentDataService.student_study_state;
				this.student_study_state_id = this.StudentDataService.student_study_state_id;
				this.student_grade = this.StudentDataService.student_grade;
				this.student_grade_id = this.StudentDataService.student_grade_id;
				this.student_div = this.StudentDataService.student_div;
				this.student_div_id = this.StudentDataService.student_div_id;
				this.student_failure_years = this.StudentDataService.student_failure_years;


		
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited", this.StudentDataService.student_civilian_id )

			});
		var test1

		this.student_file_ser = this.student_file_ser;
		this.student_civilian_id = this.student_civilian_id;
		this.student_sex = this.student_sex;
		this.student_sex_id = this.student_sex_id;
		this.student_name = this.student_name;
		this.student_nationality = this.student_nationality;
		this.student_nationality_id = this.student_nationality_id;
		this.student_dob = this.student_dob;
		this.student_age_year = this.student_age_year;
		this.student_age_month = this.student_age_month;
		this.student_age_day = this.student_age_day;
		this.student_acceptance_reason_id = this.student_acceptance_reason_id;
		this.student_acceptance_reason = this.student_acceptance_reason;
		this.student_religion = this.student_religion;
		this.student_religion_id = this.student_religion_id;
		this.student_district = this.student_district;
		this.student_district_id = this.student_district_id;
		this.student_school = this.student_school;
		this.student_stage = this.student_stage;
		this.student_stage_id = this.student_stage_id;
		this.student_state = this.student_state;
		this.student_state_id = this.student_state_id;
		this.student_study_state = this.student_study_state;
		this.student_study_state_id = this.student_study_state_id;
		this.student_grade = this.student_grade;
		this.student_grade_id = this.student_grade_id;
		this.student_div = this.student_div;
		this.student_div_id = this.student_div_id;
		this.student_failure_years = this.student_failure_years;
	}
}
