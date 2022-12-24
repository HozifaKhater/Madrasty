import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDataService } from '../../../../Services/EmployeeDataService';
import { EmployeeMaster, Employee } from '../../../../EmployeeMaster.Model';
import { Borrow_bookDataService } from '../../../../Services/Borrow_bookDataService';
import { Borrow_bookMaster, Borrow_book } from '../../../../Borrow_bookMaster.Model';
import moment from 'moment';

@Component({
	selector: 'kt-alert',
	templateUrl: './alert.component.html',
	styles: [
		`
    	:host >>> .alert-custom {
			color: #99004d;
			background-color: #f169b4;
			border-color: #800040;
    	}`
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit {
	@Input() borrow_data: any;
	borr_id: number;
	borr_date: string = "";
	lib_book_name: string = "";
	borr_name: string = "";

	Employees: Employee[];
	employeedepartment: any;

	private _success = new Subject<string>();
	staticAlertClosed = false;
	successMessage: string;
	private backup: Array<IAlert>;

	exampleBasicAlert: any;
	exampleCloseableAlert: any;
	exampleSelfClosingAlert: any;
	exampleCustomAlert: any;
	exampleGlobalConfigurationOfAlerts: any;

	constructor(alertConfig: NgbAlertConfig, private EmployeeService: EmployeeDataService, private Borrow_bookDataService: Borrow_bookDataService) {
		this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));
	}

	add_borrow() {

		this.Borrow_bookDataService.borr_date = moment(this.borr_date).format('DD/MM/YYYY');
		this.Borrow_bookDataService.borr_name = this.employeedepartment.emp_name;
		this.Borrow_bookDataService.BClicked('Component A is clicked!!');
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		//var val = {

		//	borr_date: moment(this.borr_date).format('DD/MM/YYYY'),
		//	lib_book_name: this.lib_book_name,
		//	borr_name: this.employeedepartment.emp_name
		//};
		//console.log("asd", val)
		//this.Borrow_bookDataService.addBorrow_book(val).subscribe(res => {
		//	alert(res.toString());
		//})
		//console.log(val)
	}


	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Borrow_bookDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.borr_id = Number(this.Borrow_bookDataService.borr_id);

				this.borr_date = this.Borrow_bookDataService.borr_date;
				this.lib_book_name = this.Borrow_bookDataService.lib_book_name;
				this.borr_name = this.Borrow_bookDataService.borr_name;


			});
		var test1

		this.borr_id = this.borr_id;
		this.borr_date = this.borr_date;
		this.lib_book_name = this.lib_book_name;
		this.borr_name = this.borr_name;



		setTimeout(() => this.staticAlertClosed = true, 20000);

		this._success.subscribe((message) => this.successMessage = message);
		this._success.pipe(
			debounceTime(5000)
		).subscribe(() => this.successMessage = null);
	}



	changeSuccessMessage() {
		this._success.next(`${new Date()} - Message successfully changed.`);
	}
}

export interface IAlert {
	id: number;
	type: string;
	message: string;
}
