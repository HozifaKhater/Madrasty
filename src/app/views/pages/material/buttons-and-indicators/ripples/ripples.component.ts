import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Mra7lDataService } from '../../../../../Services/Mra7lDataService';

import { Mra7lMaster, Mra7l } from '../../../../../Mra7lMaster.Model';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
	selector: 'kt-ripples',
	templateUrl: './ripples.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RipplesComponent implements OnInit {
	@Input() mra7l_data: any;
	mr7la_id: number;
	mr7la_name: string = "";
	mr7la_code: number;
	mr7la_desc: string = "";

	exampleBasic;

	centered = false;
  	disabled = false;
  	unbounded = false;

  	radius: number;
  	color: string;
    form1: FormGroup;
    constructor(public _fb: FormBuilder, private Mra7lDataService: Mra7lDataService) {
        this.form1 = this._fb.group({
            mr7la_name: ['', [Validators.required]],
            mr7la_code: ['', [Validators.required]],
            mr7la_desc: ['', [Validators.required]]
        });
    }

	add_mra7l() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {



                mr7la_name: this.mr7la_name,
                mr7la_code: Number(this.mr7la_code),
                mr7la_desc: this.mr7la_desc
            };
            console.log("asd", val)
            this.Mra7lDataService.addMra7l(val).subscribe(res => {
                alert(res.toString());
            })
            console.log(val)
            this.form1.reset();
        }
	}
	//corridorsDataService: corridorsDataService;
	update_mra7l() {
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {
                mr7la_id: Number(this.mr7la_id),

                mr7la_name: this.mr7la_name,
                mr7la_code: Number(this.mr7la_code),
                mr7la_desc: this.mr7la_desc
            };

            console.log("val", val);
     

		this.Mra7lDataService.updateMra7l(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})
            this.form1.reset();
        }

	}
    cancel_mra7l() {
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

		this.Mra7lDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.mr7la_id = Number(this.Mra7lDataService.mr7la_id);

				this.mr7la_name = this.Mra7lDataService.mr7la_name;
				this.mr7la_code = Number(this.Mra7lDataService.mr7la_code);
				this.mr7la_desc = this.Mra7lDataService.mr7la_desc;


			});
		var test1

		this.mr7la_id = this.mr7la_id;
		this.mr7la_name = this.mr7la_name;
		this.mr7la_code = this.mr7la_code;
		this.mr7la_desc = this.mr7la_desc;


	}

}
