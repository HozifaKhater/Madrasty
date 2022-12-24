import { Component, OnInit, ViewChild, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { Corr_meetingDataService } from '../../../../Services/Corr_meetingDataService';
import { Corr_meetingMaster, Corr_meeting } from '../../../../Corr_meetingMaster.Model';
import moment from 'moment';


@Component({
	selector: 'kt-popover',
	templateUrl: './popover.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	// styles: [`.card { padding: 50px 0; text-align: center; overflow:hidden }`],
	providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
export class PopoverComponent implements OnInit {
	@Input() cor_data: any;
	corr_meet_id: number;
	corr_meet_date: string = "";
	corr_meet_time: string = "";
	corr_meet_loc: string = "";


	exampleQuickAndEasyPopovers;
	exampleHTMLAndBindingsInPopovers;
	exampleCustomAndManualTriggers;
	exampleContextAndManualTriggers;
	examplePopoverVisibilityEvents;
	exampleAppendPopoverInTheBody;
	exampleGlobalConfigurationOfPopovers;

	name = 'World';
	greeting = {};
	name1 = 'World';

	@ViewChild('p', {static: true}) public popover: NgbPopover;
	@ViewChild('p2', {static: true}) public popover2: NgbPopover;

	constructor(config: NgbPopoverConfig, private Corr_meetingDataService: Corr_meetingDataService) {
		// customize default values of popovers used by this component tree
		// config.placement = 'right';
		config.container = 'body';
	}

	add_meet() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {
			corr_meet_date: moment(this.corr_meet_date).format('DD/MM/YYYY'),
			corr_meet_time: this.corr_meet_time,
			corr_meet_loc: this.corr_meet_loc
			

		};
		console.log("asd", val)
		this.Corr_meetingDataService.addCorr_meeting(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_meet() {

		var val = {
			corr_meet_id: Number(this.corr_meet_id),

			corr_meet_date: moment(this.corr_meet_date).format('DD/MM/YYYY'),
			corr_meet_time: this.corr_meet_time,
			corr_meet_loc: this.corr_meet_loc
		};

		console.log("val", val);


		this.Corr_meetingDataService.updateCorr_meeting(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_meet() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Corr_meetingDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.corr_meet_id = Number(this.Corr_meetingDataService.corr_meet_id);
				this.corr_meet_date = this.Corr_meetingDataService.corr_meet_date;
				this.corr_meet_time = this.Corr_meetingDataService.corr_meet_time;
				this.corr_meet_loc = this.Corr_meetingDataService.corr_meet_loc;


			});
		var test1

		this.corr_meet_id = this.corr_meet_id;
		this.corr_meet_date = this.corr_meet_date;
		this.corr_meet_time = this.corr_meet_time;
		this.corr_meet_loc = this.corr_meet_loc;

	}

	public changeGreeting(greeting: any): void {
		const isOpen = this.popover2.isOpen();
		this.popover2.close();
		if (greeting !== this.greeting || !isOpen) {
			this.greeting = greeting;
			this.popover2.open(greeting);
		}
	}
}
