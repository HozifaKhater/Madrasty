import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { teams_and_groupsDataService } from '../../../../Services/teams_and_groupsDataService';
import { teams_and_groupsMaster, teams_and_groups } from '../../../../teams_and_groupsMaster.Model';
import { EmployeeDataService } from '../../../../Services/EmployeeDataService';
import { Employee } from '../../../../EmployeeMaster.Model';


@Component({
	selector: 'kt-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['dropdown.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
export class DropdownComponent implements OnInit {
	@Input() team_data: any;
	id: number;
	type_id: string = "";
	type_name: string = "";
	name: string = "";
	goals: string = "";

	exampleDropdown;
	exampleManualTriggers;
	exampleButtonGroupsAndSplitButtons;
	exampleGlobalConfigurationOfDropdowns;
    Employees: Employee[];
    constructor(private EmployeeService: EmployeeDataService,config: NgbDropdownConfig, private teams_and_groupsDataService: teams_and_groupsDataService) {
		// customize default values of dropdowns used by this component tree
		// config.placement = 'top-left';
        config.autoClose = true;
        this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
            error => console.log(error),
            () => console.log("emp dropdown", this.Employees));
	}

	add_team() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			type_id: Number(this.type_id),
			type_name: this.type_name,
			name: this.name,
			goals: this.goals
		};
		console.log("asd", val)
		this.teams_and_groupsDataService.addteams_and_groups(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_team() {

		var val = {
			id: Number(this.id),

			type_id: Number(this.type_id),
			type_name: this.type_name,
			name: this.name,
			goals: this.goals
		
		};

		console.log("val", val);


		this.teams_and_groupsDataService.updateteams_and_groups(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_team() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.teams_and_groupsDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.id = Number(this.teams_and_groupsDataService.id);
				this.type_id = this.teams_and_groupsDataService.type_id;
				this.type_name = this.teams_and_groupsDataService.type_name;
				this.name = this.teams_and_groupsDataService.name;
				this.goals = this.teams_and_groupsDataService.goals;


			});
		var test1

		this.id = this.id;
		this.type_id = this.type_id;
		this.type_name = this.type_name;
		this.name = this.name;
		this.goals = this.goals;
	
	}
}
