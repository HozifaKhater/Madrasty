import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import moment from 'moment';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { Mra7lDataService } from '../../../../../Services/Mra7lDataService';
import { Mra7l, Mra7lMaster } from '../../../../../Mra7lMaster.Model';

import { LevelsDataService } from '../../../../../Services/LevelsDataService';
import { Levels,LevelsMaster } from '../../../../../LevelsMaster.Model';
import * as def from '../../../../../definationsMaster.Model';

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

	reasons1 = [
		{ value: '1', viewValue: 'سبب قبول1' },
		{ value: '2', viewValue: 'سبب قبول2' },
		{ value: '3', viewValue: 'سبب قبول3' }

	];

	rels = [
		{ value: '1', viewValue: 'مسلم' },
		{ value: '2', viewValue: 'مسيحي' }
	

	];

	regions1 = [
		{ value: '1', viewValue: 'منطقة1' },
		{ value: '2', viewValue: 'منطقة2' }


	];

	schools1 = [
		{ value: '1', viewValue: 'مدرسه1' },
		{ value: '2', viewValue: 'مدرسه2' }
	];

	stages1 = [
		{ value: '1', viewValue: 'مرحله1' },
		{ value: '2', viewValue: 'مرحله2' }
	];

	levels1 = [
		{ value: '1', viewValue: 'الصف الاول' },
		{ value: '2', viewValue: 'الصف الثاني' }
	];

	majors1 = [
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
    sex: def.sex[];
    nat: def.nat[];
    reasons: def.reasons[];
    religion: def.religion[];
    region: def.region[];
    branch: def.branch[];
    school: def.school[];
    levels: Levels[];
    mra7l: Mra7l[];
    study_status: def.study_status[];
    selecteddepartment: any;
    selectedsidedepartment: any;
    selectedsex: any;
    selectednat: any;
    selectedstatus: any;
    selectedrel: any;
    selectedjob_tybe: any;
    selectedrelation: any;
    selectedsubject: any;
    selectedcrit: any;
    selectedcountry: any;
    selectedemp_status: any;
    selectedreason: any;
    selectedschool: any;
    selectedmra7l: any;
    selectedlevels: any;
    selectedbranch: any;
    selectedstudy_status: any;
    selectedregion: any;
    
    form1: FormGroup;
    constructor(public _fb: FormBuilder, private LevelsDataService: LevelsDataService, private Mra7lDataService: Mra7lDataService, private EmployeeService: EmployeeDataService, private StudentDataService: StudentDataService) {
        this.form1 = this._fb.group({
            student_civilian_id: ['', [Validators.required]],
            selectednat: ['', [Validators.required]],
            selectedsex: ['', [Validators.required]],
            student_name: ['', [Validators.required]],
            selectedregion: ['', [Validators.required]], 
             
            selectedreason: ['', [Validators.required]],
            selectedrel: ['', [Validators.required]],
            student_dob: [{ value: '', disabled: true }, [Validators.required]],
            selectedschool: ['', [Validators.required]],
            selectedmra7l: ['', [Validators.required]],
            selectedlevels: ['', [Validators.required]],
            selectedbranch: ['', [Validators.required]],
            selectedstudy_status: [[Validators.required]],

           
        });
        this.StudentDataService.get_start_date().subscribe(data => this.start_date = data,
            error => console.log(error),
            () => console.log("okstart date", this.start_date.start_year_date));

        EmployeeService.Getdefinations_with_scode("sex").subscribe(data => this.sex = data,
            error => console.log(error),
            () => console.log("ok"));

        EmployeeService.Getdefinations_with_scode("nat").subscribe(data => this.nat = data,
            error => console.log(error),
            () => console.log("ok"));


        EmployeeService.Getdefinations_with_scode("reasons").subscribe(data => this.reasons = data,
            error => console.log(error),
            () => console.log("ok"));

        EmployeeService.Getdefinations_with_scode("religion").subscribe(data => this.religion = data,
            error => console.log(error),
            () => console.log("ok"));

        EmployeeService.Getdefinations_with_scode("region").subscribe(data => this.region = data,
            error => console.log(error),
            () => console.log("ok"));
        EmployeeService.Getdefinations_with_scode("branch").subscribe(data => this.branch = data,
            error => console.log(error),
            () => console.log("ok"));

        EmployeeService.Getdefinations_with_scode("school").subscribe(data => this.school = data,
            error => console.log(error),
            () => console.log("ok"));

        Mra7lDataService.GetAllMra7l().subscribe(data => this.mra7l = data,
            error => console.log(error),
            () => console.log("ok"));

        LevelsDataService.GetAllLevels().subscribe(data => this.levels = data,
            error => console.log(error),
            () => console.log("ok"));

        EmployeeService.Getdefinations_with_scode("study_status").subscribe(data => this.study_status = data,
            error => console.log(error),
            () => console.log("ok"));
    }
	add_student() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			student_file_ser: Number(this.student_file_ser),
			student_civilian_id: this.student_civilian_id,
            student_sex: this.selectedsex.def_name,
            student_sex_id: Number(this.selectedsex.def_id),
			student_name: this.student_name,
            student_nationality: this.selectednat.def_name,
            student_nationality_id: Number(this.selectednat.def_id),
			student_dob: this.student_dob,
			student_age_year: Number(this.student_age_year),
			student_age_month: Number(this.student_age_month),
			student_age_day: Number(this.student_age_day),
			student_acceptance_reason_id: Number(this.selectedreason.def_id),
            student_acceptance_reason: this.selectedreason.def_name,
            student_religion: this.selectedrel.def_name,
            student_religion_id: Number(this.selectedrel.def_id),
            student_district: this.selectedregion.def_name,
            student_district_id: Number(this.selectedregion.def_id),
			student_school: this.selectedschool.def_name,
            student_stage: this.selectedmra7l.mr7la_name,
            student_stage_id: Number(this.selectedmra7l.mr7la_id),
			student_state: this.selectedstudy_status.def_name,
            student_state_id: Number(this.selectedstudy_status.def_id),
            student_study_state: this.selectedstudy_status.def_name,
            student_study_state_id:  Number(this.selectedstudy_status.def_id),
			student_grade: this.selectedlevels.lev_name,
            student_grade_id: Number(this.selectedlevels.lev_id),
			student_div: this.selectedbranch.def_name,
            student_div_id: Number(this.selectedbranch.def_id),
			student_failure_years: Number(this.student_failure_years)

		};
        console.log("asd", val)
    

         
        this.StudentDataService.addstudents(val).subscribe(res => {
           
            alert(res.toString());
            this.StudentDataService.BClicked("");
            this.form1.reset();
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
            student_sex: this.selectedsex.def_name,
            student_sex_id: Number(this.selectedsex.def_id),
            student_name: this.student_name,
            student_nationality: this.selectednat.def_name,
            student_nationality_id: Number(this.selectednat.def_id),
            student_dob: this.student_dob,
            student_age_year: Number(this.student_age_year),
            student_age_month: Number(this.student_age_month),
            student_age_day: Number(this.student_age_day),
            student_acceptance_reason_id: Number(this.selectedreason.def_id),
            student_acceptance_reason: this.selectedreason.def_name,
            student_religion: this.selectedrel.def_name,
            student_religion_id: Number(this.selectedrel.def_id),
            student_district: this.selectedregion.def_name,
            student_district_id: Number(this.selectedregion.def_id),
            student_school: this.selectedschool.def_name,
            student_stage: this.selectedmra7l.mr7la_name,
            student_stage_id: Number(this.selectedmra7l.mr7la_id),
            student_state: this.selectedstudy_status.def_name,
            student_state_id: Number(this.selectedstudy_status.def_id),
            student_study_state: this.selectedstudy_status.def_name,
            student_study_state_id: Number(this.selectedstudy_status.def_id),
            student_grade: this.selectedlevels.lev_name,
            student_grade_id: Number(this.selectedlevels.lev_id),
            student_div: this.selectedbranch.def_name,
            student_div_id: Number(this.selectedbranch.def_id),
            student_failure_years: Number(this.student_failure_years)

		};

		console.log("val", val);


		this.StudentDataService.updatestudents(val).subscribe(res => {
            alert(res.toString());
            this.form1.reset();
            this.StudentDataService.BClicked("");
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
    cancel_student() {
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


                var selected_sex = String(this.StudentDataService.student_sex_id);
                this.selectedsex = this.sex[this.sex.findIndex(function (el) {

                    return String(el.def_id) == selected_sex;

                })];

                var selected_nat = String(this.StudentDataService.student_nationality_id);
                this.selectednat = this.nat[this.nat.findIndex(function (el) {
                    return String(el.def_id) == selected_nat;
                })];

            
                var selected_reason = String(this.StudentDataService.student_acceptance_reason_id);
                this.selectedreason = this.reasons[this.reasons.findIndex(function (el) {
                    return String(el.def_id) == selected_reason;
                })];

                var selected_rel = String(this.StudentDataService.student_religion_id);
                this.selectedrel = this.religion[this.religion.findIndex(function (el) {
                    return String(el.def_id) == selected_rel;
                })];


                var selected_reg = String(this.StudentDataService.student_district_id);
                this.selectedregion = this.region[this.region.findIndex(function (el) {
                    return String(el.def_id) == selected_reg;
                })];
                var selected_school = String(this.StudentDataService.student_school);
                this.selectedschool = this.school[this.school.findIndex(function (el) {
                    return String(el.def_name) == selected_school;
                })];

                var selected_mra7l = String(this.StudentDataService.student_stage_id);
                this.selectedmra7l = this.mra7l[this.mra7l.findIndex(function (el) {
                    return String(el.mr7la_id) == selected_mra7l;
                })];

                var selected_levels = String(this.StudentDataService.student_grade_id);
                this.selectedlevels = this.levels[this.levels.findIndex(function (el) {
                    return String(el.lev_id) == selected_levels;
                })];

                var selected_branch = String(this.StudentDataService.student_div_id);
                this.selectedbranch = this.branch[this.branch.findIndex(function (el) {
                    return String(el.def_id) == selected_branch;
                })];
                    
                var selected_study_status = String(this.StudentDataService.student_study_state_id);
                this.selectedstudy_status = this.study_status[this.study_status.findIndex(function (el) {
                    return String(el.def_id) == selected_study_status;
                })];


		
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
