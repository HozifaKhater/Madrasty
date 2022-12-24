import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeMaster, Employee } from '../../../../EmployeeMaster.Model';
import { EmployeeDataService } from '../../../../Services/EmployeeDataService';
import { LevelsDataService } from '../../../../Services/LevelsDataService';
import { LevelsMaster, Levels } from '../../../../LevelsMaster.Model';
import { ClassesMaster, Classes } from '../../../../ClassesMaster.Model';
import { ClassesDataService } from '../../../../Services/ClassesDataService';
import { ObservationsMaster, Observations } from '../../../../ObservationsMaster.Model';
import { ObservationsDataService } from '../../../../Services/ObservationsDataService';
import moment from 'moment';
@Component({
	selector: 'kt-pagination',
	templateUrl: './pagination.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
	@Input() observ_data: any;
	observer_id: number;
	observ_ftra: string = "";
	lev_id: number;
	lev_name: string = "";
	class_id: number;
	class_name: string = "";
	emp_id: number;
	emp_name: string = "";
	observ_loc: string = "";
	observe_date: string = "";

	Employees: Employee[];
	employeedepartment: any;
	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;

	page = 4;
	page2 = 1;
	page3 = 4;
	currentPage = 3;
	page4 = 3;
	isDisabled = true;
	page5 = 4;

	toggleDisabled() {
		this.isDisabled = !this.isDisabled;
	}

	constructor(private LevelsDataService: LevelsDataService,private ClassesDataService: ClassesDataService,
		private ObservationsDataService: ObservationsDataService, private EmployeeDataService: EmployeeDataService) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.classes));

		this.EmployeeDataService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));

	}

	add_observ() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			observ_ftra: this.observ_ftra,
			lev_id: Number(this.selectedlevel.lev_id),
			lev_name: this.selectedlevel.lev_name,
			class_id: Number(this.selectedclass.class_id),
			
			class_name: this.selectedclass.class_name,
			emp_id: Number(this.employeedepartment.emp_id),
			emp_name: this.employeedepartment.emp_name,
			observ_loc: this.observ_loc,
			observe_date: moment(this.observe_date).format('DD/MM/YYYY')
		};
		console.log("asd", val)
		this.ObservationsDataService.addObservations(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_observ() {

		var val = {
			observer_id: Number(this.observer_id),
			observ_ftra: this.observ_ftra,
			lev_id: Number(this.selectedlevel.lev_id),
			lev_name: this.selectedlevel.lev_name,
			class_id: Number(this.selectedclass.class_id),

			class_name: this.selectedclass.class_name,
			emp_id: Number(this.employeedepartment.emp_id),
			emp_name: this.employeedepartment.emp_name,
			observ_loc: this.observ_loc,
			observe_date: moment(this.observe_date).format('DD/MM/YYYY')
		};

		console.log("val", val);


		this.ObservationsDataService.updateObservations(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_observ() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.ObservationsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.observer_id = Number(this.ObservationsDataService.observer_id);
				this.observ_ftra = this.ObservationsDataService.observ_ftra;
				this.lev_id = Number(this.ObservationsDataService.lev_id);
				this.lev_name = this.ObservationsDataService.lev_name;
				this.class_id = Number(this.ObservationsDataService.class_id);
				this.class_name = this.ObservationsDataService.class_name;
				this.emp_id = Number(this.ObservationsDataService.emp_id);
				this.emp_name = this.ObservationsDataService.emp_name;
				this.observ_loc = this.ObservationsDataService.observ_loc;
				this.observe_date = this.ObservationsDataService.observe_date;

			});
		var test1

		this.observer_id = this.observer_id;
		this.observ_ftra = this.observ_ftra;
		this.lev_id = this.lev_id;
		this.lev_name = this.lev_name;
		this.class_id = this.class_id;
		this.class_name = this.class_name;
		this.emp_id = this.emp_id;
		this.emp_name = this.emp_name;
		this.observ_loc = this.observ_loc;
		this.observe_date = this.observe_date;
	}
}
