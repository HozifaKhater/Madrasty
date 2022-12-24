import { Component, OnInit, ChangeDetectionStrategy, Input  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { corridorsDataService } from '../../../../../Services/CorridorsDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { CorridorsMaster, corridor } from '../../../../../CorridorsMaster.Model';
import { EmployeeMaster, Employee } from '../../../../../EmployeeMaster.Model';
import { Corridor_supervisionDataService } from '../../../../../Services/Corridor_supervisionDataService';

@Component({
	selector: 'kt-stepper',
	templateUrl: './stepper.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [Corridor_supervisionDataService]
})
export class StepperComponent implements OnInit {
	@Input() corridor_supervision_data: any;
	selectedcorridor: any;
	selectedemployee: any;
	supervision_id: number;
	corridor_id: string = "";
	basic_emp_id: string = "";
	basic_emp_name: string = "";
	spare_emp_id: string = "";
	spare_emp_name: string = "";
	from_date: string = "";
	to_date: string = "";
	corridor_name: string = "";
	dep_id: string = "";
	dep_name: string = "";
	emp_id: string = "";
	emp_name: string = "";


	selecteddepartment: any;
	departments: Departments[];
	corridors: corridor[];
	employees: Employee[];

	exampleBasicStepper;
	exampleHorizontalStepper;
	exampleStepperOverview;
    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;

	constructor(private _formBuilder: FormBuilder, private EmployeeDataService: EmployeeDataService, private DepartmentDataService: DepartmentDataService, private corridorsDataService: corridorsDataService, private Corridor_supervisionDataService: Corridor_supervisionDataService) {
		this.DepartmentDataService.GetAllMasterdepartment().subscribe(data => this.departments = data,
			error => console.log(error),
			() => console.log("department dropdown", this.departments));

		this.corridorsDataService.GetAllCorridors().subscribe(data => this.corridors = data,
			error => console.log(error),
			() => console.log("department dropdown", this.corridors));
	}

	add_corridor_supervision() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			//supervision_id: Number(this.supervision_id),
			corridor_id: Number(this.selectedcorridor.corridor_id),
			basic_emp_id: Number(this.selectedemployee.emp_id),
			basic_emp_name: this.selectedemployee.emp_name,
			spare_emp_id: Number(this.spare_emp_id),
			spare_emp_name: this.spare_emp_name,
			from_date: this.from_date,
			to_date: this.to_date,
			corridor_name: this.selectedcorridor.corridor_name,
			dep_id: Number(this.selecteddepartment.dep_id),
			dep_name: this.selecteddepartment.dep_name,
			emp_id: Number(this.selectedemployee.emp_id),
			emp_name: this.selectedemployee.emp_name



		};
		console.log("asd", val)
		this.Corridor_supervisionDataService.addCorridor_supervision(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}

	update_corridor_supervision() {

		/*console.log("emp", emp, this.employeedepartment );*/
		var val = {

			supervision_id: Number(this.Corridor_supervisionDataService.supervision_id),
			corridor_id: Number(this.selectedcorridor.corridor_id),
			basic_emp_id: Number(this.selectedemployee.emp_id),
			basic_emp_name: this.selectedemployee.emp_name,
			spare_emp_id: Number(this.spare_emp_id),
			spare_emp_name: this.spare_emp_name,
			from_date: this.from_date,
			to_date: this.to_date,
			corridor_name: this.selectedcorridor.corridor_name,
			dep_id: Number(this.selecteddepartment.dep_id),
			dep_name: this.selecteddepartment.dep_name,
			emp_id: Number(this.selectedemployee.emp_id),
			emp_name: this.selectedemployee.emp_name

		};

		console.log("val", val);


		this.Corridor_supervisionDataService.updateCorridor_supervision(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_corridor_supervision() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}


	departmentemp(event) {
		console.log("wwww", this.selecteddepartment, event.source.value.dep_id, event);
	

		this.EmployeeDataService.GetAllEmployee_of_department(event.source.value.dep_id).subscribe(data => this.employees = data,
			error => console.log(error),
			() => console.log("department dropdown", this.employees));

}

	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Corridor_supervisionDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

			
				this.supervision_id = Number(this.Corridor_supervisionDataService.supervision_id);
				//this.corridor_id = this.Corridor_supervisionDataService.corridor_id;
				//this.basic_emp_id = this.Corridor_supervisionDataService.basic_emp_id;
				this.basic_emp_name = this.Corridor_supervisionDataService.basic_emp_name;
				this.spare_emp_id = this.Corridor_supervisionDataService.spare_emp_id;
				this.spare_emp_name = this.Corridor_supervisionDataService.spare_emp_name;
				this.from_date = this.Corridor_supervisionDataService.from_date;
				this.to_date = this.Corridor_supervisionDataService.to_date;
				this.corridor_name = this.Corridor_supervisionDataService.corridor_name;
				//this.dep_id = this.Corridor_supervisionDataService.dep_id;
				this.dep_name = this.Corridor_supervisionDataService.dep_name;
				this.emp_id = this.Corridor_supervisionDataService.emp_id;
				this.emp_name = this.Corridor_supervisionDataService.emp_name;

				var selected_value_dep = this.Corridor_supervisionDataService.dep_id;
				this.selecteddepartment = this.departments[this.departments.findIndex(x => x.dep_id === selected_value_dep)];

				var selected_value_cor = Number(this.Corridor_supervisionDataService.corridor_id);
				this.selectedcorridor = this.corridors[this.corridors.findIndex(x => x.corridor_id === selected_value_cor)];

				this.EmployeeDataService.GetAllEmployee_of_department(this.Corridor_supervisionDataService.dep_id).subscribe(data => this.employees = data,
					error => console.log(error),
					() => {
						console.log("department dropdown", this.employees);
						console.log("editedemployees", this.employees)
						this.selectedemployee = this.employees[this.employees.findIndex(x => x.emp_id === selected_value_emp)];
					});
				var selected_value_emp = this.Corridor_supervisionDataService.basic_emp_id;
				//console.log("editedemployees", this.employees)
				//this.selectedemployee = this.employees[this.employees.findIndex(x => x.emp_id === selected_value_emp)];
				
				console.log("edited", selected_value_cor, selected_value_emp)

			});
		var test1

		this.supervision_id = this.supervision_id;
		this.corridor_id = this.corridor_id;
		this.basic_emp_id = this.basic_emp_id;
		this.basic_emp_name = this.basic_emp_name;
		this.spare_emp_id = this.spare_emp_id;
		this.spare_emp_name = this.spare_emp_name;
		this.from_date = this.from_date;
		this.to_date = this.to_date;
		this.corridor_name = this.corridor_name;
		this.dep_id = this.dep_id;
		this.dep_name = this.dep_name;
		this.emp_id = this.emp_id;
		this.emp_name = this.emp_name;


	
	}
}

