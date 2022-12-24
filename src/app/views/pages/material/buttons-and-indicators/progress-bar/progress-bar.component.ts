import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
	selector: 'kt-progress-bar',
	templateUrl: './progress-bar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-h2 {
		margin: 10px;
	}
	.example-section {
		display: flex;
		align-content: center;
		align-items: center;
		height: 60px;
	}

	.example-margin {
		margin: 0 10px;
	}`]
})
export class ProgressBarComponent implements OnInit {
	@Input() levels_data: any;
	lev_id: number;
	lev_name: string = "";
	lev_class_no: number;
	lev_desc: string = "";

	exampleDeterminate;
	exampleIndeterminate;
	exampleBuffer;
	exmapleQuery;
	exampleConfig;
	color = 'primary';
	mode = 'determinate';
	value = 50;
	bufferValue = 75;

    form1: FormGroup;
    constructor(public _fb: FormBuilder, private LevelsDataService: LevelsDataService) {
        this.form1 = this._fb.group({
            lev_name: ['', [Validators.required]],
            lev_desc: ['', [Validators.required]],
            lev_class_no: ['', [Validators.required]]
        });}

	add_level() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {



                lev_name: this.lev_name,
                lev_class_no: Number(this.lev_class_no),
                lev_desc: this.lev_desc
            };
            console.log("asd", val)
            this.LevelsDataService.addLevels(val).subscribe(res => {
                alert(res.toString());
            })
            console.log(val)
            this.form1.reset();
        }
	}
	//corridorsDataService: corridorsDataService;
	update_level() {
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var val = {
                lev_id: Number(this.lev_id),

                lev_name: this.lev_name,
                lev_class_no: Number(this.lev_class_no),
                lev_desc: this.lev_desc
            };

            console.log("val", val);


            this.LevelsDataService.updateLevels(val).subscribe(res => {
                alert(res.toString());
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            })
            this.form1.reset();
        }
	}
    cancel_level() {
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

		this.LevelsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.lev_id = Number(this.LevelsDataService.lev_id);

				this.lev_name = this.LevelsDataService.lev_name;
				this.lev_class_no = Number(this.LevelsDataService.lev_class_no);
				this.lev_desc = this.LevelsDataService.lev_desc;


			});
		var test1

		this.lev_id = this.lev_id;
		this.lev_name = this.lev_name;
		this.lev_class_no = this.lev_class_no;
		this.lev_desc = this.lev_desc;


	}
}
