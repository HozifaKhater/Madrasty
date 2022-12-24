import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Group_meetingDataService } from '../../../../Services/Group_meetingDataService';
import { Group_meetingMaster, Group_meeting } from '../../../../Group_meetingMaster.Model';
import moment from 'moment';



@Component({
  selector: 'kt-ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-info" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContentComponent {
	@Input() name;
	constructor(public activeModal: NgbActiveModal) { }
}

@Component({
	selector: 'kt-modal',
	templateUrl: './modal.component.html',
	encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class ModalComponent implements OnInit {
	@Input() meeting_data: any;
	group_id: number;
	group_name: string = "";
	meeting_no: number;
	meeting_date: string = "";
	meeting_mem_no: number;
	meeting_loc: string = "";
	impor_recomm: string = "";
	bus_table: string = "";
    selecteddepartment: any;
    Departments: any;
	exampleModalWithDefaultOptions;
	exampleComponentsAsContent;
	exampleModalWithCustomClass;
	exampleScrollableFixedContent;
	exampleScrollingLongContent;
	exampleLargeModal;
	exampleSmallModal;
	exampleVerticallyCentered;

	closeResult: string;
	closeResult2: string;
	constructor(private modalService: NgbModal, private Group_meetingDataService: Group_meetingDataService) { }

	open(content) {
		this.modalService.open(content).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	open2() {
		const modalRef = this.modalService.open(NgbdModalContentComponent);
		modalRef.componentInstance.name = 'World';
	}

	open3(content) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	openLarge(content) {
		this.modalService.open(content, {
			size: 'lg'
		});
	}

	openSmall(content) {
		this.modalService.open(content, {
			size: 'sm'
		});
	}

	openCentred(content) {
		this.modalService.open(content,
			// { centered: true }
		);
	}

	add_meeting() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			group_name: this.group_name,
			meeting_no: Number(this.meeting_no),
			meeting_date: moment(this.meeting_date).format('DD/MM/YYYY'),
			meeting_mem_no: Number(this.meeting_mem_no),
			meeting_loc: this.meeting_loc,
			impor_recomm: this.impor_recomm,
			bus_table: this.bus_table
		};
		console.log("asd", val)
		this.Group_meetingDataService.addGroup_meeting(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_meeting() {

		var val = {
			group_id: Number(this.group_id),

			group_name: this.group_name,
			meeting_no: Number(this.meeting_no),
			meeting_date: moment(this.meeting_date).format('DD/MM/YYYY'),
			meeting_mem_no: Number(this.meeting_mem_no),
			meeting_loc: this.meeting_loc,
			impor_recomm: this.impor_recomm,
			bus_table: this.bus_table
		};

		console.log("val", val);


		this.Group_meetingDataService.updateGroup_meeting(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_meeting() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}


	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Group_meetingDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.group_id = Number(this.Group_meetingDataService.group_id);
				this.group_name = this.Group_meetingDataService.group_name;
				this.meeting_no = Number(this.Group_meetingDataService.meeting_no);
				this.meeting_date = this.Group_meetingDataService.meeting_date;
				this.meeting_mem_no = Number(this.Group_meetingDataService.meeting_mem_no);
				this.meeting_loc = this.Group_meetingDataService.meeting_loc;
				this.impor_recomm = this.Group_meetingDataService.impor_recomm;
				this.bus_table = this.Group_meetingDataService.bus_table;
	

			});
		var test1

		this.group_id = this.group_id;
		this.group_name = this.group_name;
		this.meeting_no = this.meeting_no;
		this.meeting_date = this.meeting_date;
		this.meeting_mem_no = this.meeting_mem_no;
		this.meeting_loc = this.meeting_loc;
		this.impor_recomm = this.impor_recomm;
		this.bus_table = this.bus_table;



	}
}
