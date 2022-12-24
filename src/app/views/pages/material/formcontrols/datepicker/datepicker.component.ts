import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { SubjectMaster } from '../../../../../SubjectMaster.Model';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

const moment = _rollupMoment || _moment;


@Component({
	selector: 'kt-datepicker',
	templateUrl: './datepicker.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-events {
		width: 400px;
		height: 200px;
		border: 1px solid #555;
		overflow: auto;
	  }
	`],
	

})
export class DatepickerComponent implements OnInit {
	@Input() subject_data: any;
	subject_id: number;
	subject_name: string;
	subject_desc: string = "";

	exampleBasicDatepicker;
	exampleDatepickerStartDate;
	exampleDatepickerSelectedValue;
	exampleDatepickerWithMinMaxValidation;
	exampleDatepickerWithFilterValidation;
	exampleDatepickerInputAndChangeEvents;
	exampleDisabledDatepicker;
	exampleDatepickerTouchUI;
	exampleDatepickerOpenMethod;
	exampleDatepickerWithDifferentLocale;
	exampleDatepickerThatUsesMomentJsDates;
	exampleDatepickerWithCustomFormats;
	exampleUsesMomentJsDates;

	startDate = new Date(1990, 0, 1);
	date = new FormControl(new Date());
	date10 = new FormControl(moment([2017, 0, 1]));

	serializedDate = new FormControl((new Date()).toISOString());
	minDate = new Date(2011, 0, 1);
	maxDate = new Date(2018, 11, 1);

    events: string[] = [];
    form1: FormGroup;
    constructor(private SubjectService: SubjectDataService, public _fb: FormBuilder) {
        this.form1 = this._fb.group({
            subject_id: [''],
            subject_name: ['', [Validators.required]],
            subject_desc: ['', [Validators.pattern]]
          
        });}
	add_subject() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {

                subject_name: this.subject_name,
                subject_desc: this.subject_desc

            };
            console.log("asd", val)
            this.SubjectService.addSubject(val).subscribe(res => {
                alert(res.toString());
                this.SubjectService.BClicked("")
            })
            console.log(val)
            this.form1.reset();
        }
	}
	butDisabled: boolean;
    update_subject() {
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            /*console.log("emp", emp, this.employeedepartment );*/
            var val = {
                subject_id: this.SubjectService.subject_id,
                subject_name: this.subject_name,
                subject_desc: this.subject_desc,
            };

            console.log("val", val);


            this.SubjectService.updateSubject(val).subscribe(res => {
                alert(res.toString());
                this.SubjectService.BClicked("");
                this.form1.reset();
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            })
        }
	}
    cancel_subject() {
        this.form1.reset();
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	ngOnInit() {
		this.butDisabled = true;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.SubjectService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
			
				this.subject_id = this.SubjectService.subject_id;
				this.subject_name = this.SubjectService.subject_name;
				this.subject_desc = this.SubjectService.subject_desc;
			
				
				console.log(this.SubjectService.subject_name)
				/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")

			});
		this.subject_id = this.subject_id;
		this.subject_name = this.subject_name;
		this.subject_desc = this.subject_desc;

	}

	myFilter = (d: any): boolean => {
		const day = d.day();
		// Prevent Saturday and Sunday from being selected.
		return day !== 0 && day !== 6;
	}

	addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
		this.events.push(`${type}: ${event.value}`);
	}
}
