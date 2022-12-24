import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LevelsDataService } from '../../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../../LevelsMaster.Model';
import { corridorsDataService } from '../../../../../Services/CorridorsDataService';

import { CorridorsMaster, corridor } from '../../../../../CorridorsMaster.Model';
import { ClassesDataService } from '../../../../../Services/ClassesDataService';

import { ClassesMaster, Classes } from '../../../../../ClassesMaster.Model';

@Component({
	selector: 'kt-progress-spinner',
	templateUrl: './progress-spinner.component.html',
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
	  }
	`]
})
export class ProgressSpinnerComponent implements OnInit {
	@Input() nchra_data: any;
	class_id: number;
	class_mr7la: string = "";
	class_level: string = "";
	class_corr: string = "";
	class_name: string = "";

	Levels: Levels[];
	selectedlevel: any;
	corridors: corridor[];
	selectedcorridor: any;

	exampleBasic;
	exampleWarn;
	exampleConfig;

	color = 'primary';
	mode = 'determinate';
	value = 50;

	constructor(private LevelsDataService: LevelsDataService, private corridorsDataService: corridorsDataService, private ClassesDataService: ClassesDataService) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.corridorsDataService.GetAllCorridors().subscribe(data => this.corridors = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.corridors));
	}

	add_class() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {



			class_mr7la: this.class_mr7la,
			class_level: this.selectedlevel.lev_name,
			class_corr: this.selectedcorridor.corridor_name,
			class_name: this.class_name
		};
		console.log("asd", val)
		this.ClassesDataService.addClasses(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_class() {

		var val = {


			class_id: this.class_id,
			class_mr7la: this.class_mr7la,
			class_level: this.selectedlevel.lev_name,
			class_corr: this.selectedcorridor.corridor_name,
			class_name: this.class_name
		};

		console.log("val", val);


		this.ClassesDataService.updateClasses(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_class() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.ClassesDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.class_id = Number(this.ClassesDataService.class_id);

				this.class_mr7la = this.ClassesDataService.class_mr7la;
				this.class_level = this.ClassesDataService.class_level;
				this.class_corr = this.ClassesDataService.class_corr;
				this.class_name = this.ClassesDataService.class_name;

			});
		var test1

		this.class_id = this.class_id;
		this.class_mr7la = this.class_mr7la;
		this.class_level = this.class_level;
		this.class_corr = this.class_corr;
		this.class_name = this.class_name;

	}
}

