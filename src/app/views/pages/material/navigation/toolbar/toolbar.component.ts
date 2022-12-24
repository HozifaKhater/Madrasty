import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MasterJobsDataService } from '../../../../../Services/MasterJobsDataService';
import { MasterJobMaster, MasterJob } from '../../../../../MasterJobMaster.Model';
import { Departments } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';

@Component({
	selector: 'kt-toolbar',
	templateUrl: './toolbar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-icon {
		padding: 0 14px;
	}
	.example-spacer {
		flex: 1 1 auto;
	}
	`]
})
export class ToolbarComponent implements OnInit {
	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];

	gehat = [
		{ value: '1', viewValue: 'ÞÓã' },
		{ value: '2', viewValue: 'ãæÙÝ' },
		{ value: '3', viewValue: 'ãÏÑÓ' }
	];

	jobs: MasterJob[];
	departments: Departments[];
	constructor(private MasterJobsDataService: MasterJobsDataService, private DepartmentDataService: DepartmentDataService) {
		this.MasterJobsDataService.GetAllActivity().subscribe(data => this.jobs = data,
			error => console.log(error),
			() => { console.log("department dropdown") });

		this.DepartmentDataService.GetAlldepartment().subscribe(data => this.departments = data,
			error => console.log(error),
			() => { console.log("department dropdown") });

	}

	exampleSingleRow;
	examplMultipleRows;
	examplMultipleRows2;

	ngOnInit() {
		
	}
}
