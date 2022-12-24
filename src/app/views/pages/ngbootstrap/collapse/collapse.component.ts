import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { EmployeeMaster, Employee } from '../../../../EmployeeMaster.Model';
import { EmployeeDataService } from '../../../../Services/EmployeeDataService';
import { DepartmentMaster, Departments } from '../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../Services/DepartmentDataService';
import { ClassesMaster, Classes } from '../../../../ClassesMaster.Model';
import { ClassesDataService } from '../../../../Services/ClassesDataService';
import { StudentMaster, Student } from '../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../Services/StudentDataService';
import { LevelsDataService } from '../../../../Services/LevelsDataService';

import { LevelsMaster, Levels } from '../../../../LevelsMaster.Model';
import { TripsDataService } from '../../../../Services/TripsDataService';

import { TripsMaster, trips } from '../../../../TripsMaster.Model';
import moment from 'moment';
@Component({
	selector: 'kt-collapse',
	templateUrl: './collapse.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseComponent implements OnInit {
	@Input() trip_data: any;
	trip_id: number;
	dep_id: string = "";
	dep_name: string = "";
	emp_id: string = "";
	emp_name: string = "";
	trip_loc: string = "";

	trip_date: string = "";
	trip_time: string = "";
	trip_duration: string = "";
	trip_goals: string = "";
	trip_notes: string = "";

	Employees: Employee[];
	employeedepartment: any;
	Departments: Departments[];
	selecteddepartment: any;
	students: Student[];
	selectedstudent: any;
	Levels: Levels[];
	selectedlevel: any;
	classes: Classes[];
	selectedclass: any;

	exampleDemo: any;
	isCollapsed = false;

	constructor(private TripsDataService: TripsDataService, private LevelsDataService: LevelsDataService, private StudentDataService: StudentDataService, private ClassesDataService: ClassesDataService,
		private DepartmentDataService: DepartmentDataService, private EmployeeDataService: EmployeeDataService) {
		this.LevelsDataService.GetAllLevels().subscribe(data => this.Levels = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Levels));
		this.ClassesDataService.GetAllClasses().subscribe(data => this.classes = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.classes));
		this.StudentDataService.GetAlldepartment().subscribe(data => this.students = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.students));
		this.EmployeeDataService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));
		this.DepartmentDataService.GetAlldepartment().subscribe(data => this.Departments = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Departments));
	}

	add_trip() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

	
			dep_name: this.selecteddepartment.dep_name,
			emp_id: this.employeedepartment.emp_id,
			emp_name: this.employeedepartment.emp_name,
			trip_loc: this.trip_loc,
			trip_date: moment(this.trip_date).format('DD/MM/YYYY'),
			trip_time: this.trip_time,
			trip_duration: this.trip_duration,
			trip_goals: this.trip_goals,
			trip_notes: this.trip_notes
		};
		console.log("asd", val)
		this.TripsDataService.addtrips(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_trip() {

		var val = {

			//dep_id: this.selecteddepartment.dep_id,
			dep_name: this.selecteddepartment.dep_name,
			emp_id: this.employeedepartment.emp_id,
			emp_name: this.employeedepartment.emp_name,
			trip_loc: this.trip_loc,
			trip_date: moment(this.trip_date).format('DD/MM/YYYY'),
			trip_time: this.trip_time,
			trip_duration: this.trip_duration,
			trip_goals: this.trip_goals,
			trip_notes: this.trip_notes
		};

		console.log("val", val);


		this.TripsDataService.updatetrips(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_trip() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.TripsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.trip_id = Number(this.TripsDataService.trip_id);

				this.dep_id = this.TripsDataService.dep_id;
				this.dep_name = this.TripsDataService.dep_name;
				this.emp_id = this.TripsDataService.emp_id;
				this.emp_name = this.TripsDataService.emp_name;
				this.trip_loc = this.TripsDataService.trip_loc;

				this.trip_date = this.TripsDataService.trip_date;
				this.trip_time = this.TripsDataService.trip_time;
				this.trip_duration = this.TripsDataService.trip_duration;
				this.trip_goals = this.TripsDataService.trip_goals;
				this.trip_notes = this.TripsDataService.trip_notes;

			});
		var test1

		this.trip_id = this.trip_id;
		this.dep_id = this.dep_id;
		this.dep_name = this.dep_name;
		this.emp_id = this.emp_id;
		this.emp_name = this.emp_name;
		this.trip_loc = this.trip_loc;

		this.trip_date = this.trip_date;
		this.trip_time = this.trip_time;
		this.trip_duration = this.trip_duration;
		this.trip_goals = this.trip_goals;
		this.trip_notes = this.trip_notes;

	}
	}

