import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Student_premDataService } from '../../../../../Services/Student_premDataService';
import { Student_premMaster, Student_prem } from '../../../../../Student_premMaster.Model';
import { StudentMaster, Student } from '../../../../../StudentMaster.Model';
import { StudentDataService } from '../../../../../Services/StudentDataService';
import moment from 'moment';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';



@Component({
	selector: 'kt-chips',
	templateUrl: './chips.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.demo-chip-list {
		width: 100%;
	}
	mat-chip {
		max-width: 200px;
	}
	`]
})
export class ChipsComponent implements OnInit {
	@Input() student_prem_data: any;
	student_prem_id: number;
	prem_date: string = "";

	prem_leave_time: string = "";
	prem_arrive_time: string = "";
	prem_level: string = "";
	prem_class: string = "";
	prem_stu_id: number;
	prem_stu_name: string = "";
	prem_state: number;
	prem_parent_type: string = "";

	students: Student_prem[];
	selectedstudent: any;

	exampleBasic;
	exampleInput;
	exampleStacked;

	visible: boolean = true;
	selectable: boolean = true;
	removable: boolean = true;
	addOnBlur: boolean = true;

	// Enter, comma
	separatorKeysCodes = [ENTER, COMMA];

	fruits = [
		{ name: 'Lemon' },
		{ name: 'Lime' },
		{ name: 'Apple' },
	];

	levels = [
		{ value: '1', viewValue: 'الصف الاول' },
		{ value: '2', viewValue: 'الصف الثاني' }
	];

	classes = [
		{ value: '1', viewValue: ' فصل1' },
		{ value: '2', viewValue: 'فصل2' }
	];

	color: string;

	availableColors = [
	  { name: 'none', color: '' },
	  { name: 'Primary', color: 'primary' },
	  { name: 'Accent', color: 'accent' },
	  { name: 'Warn', color: 'warn' }
	];
	constructor(private StudentDataService: StudentDataService, private Student_premDataService: Student_premDataService) {
		this.StudentDataService.GetAlldepartment().subscribe(data => this.students = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.students));
		/*this.dep_name="abc"*/
		/*this.onChange()*/
	}

	add_student_prem() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		var val = {

			prem_date: moment(this.prem_date).format('DD/MM/YYYY'),
			prem_leave_time: this.prem_leave_time,
			prem_arrive_time: this.prem_arrive_time,
			prem_level: this.prem_level,
			prem_class: this.prem_class,
			prem_stu_id: Number(this.selectedstudent.student_id),
			prem_stu_name: String(this.selectedstudent.student_name),
			prem_state: this.prem_state,
			prem_parent_type: this.prem_parent_type
		};
		console.log("asd", val)
		this.Student_premDataService.addStudent_prem(val).subscribe(res => {
			alert(res.toString());
		})
		console.log(val)
	}
	//corridorsDataService: corridorsDataService;
	update_student_prem() {

		var val = {
			student_prem_id: this.student_prem_id,
			prem_date: moment(this.prem_date).format('DD/MM/YYYY'),
			prem_leave_time: this.prem_leave_time,
			prem_arrive_time: this.prem_arrive_time,
			prem_level: this.prem_level,
			prem_class: this.prem_class,
			prem_stu_id: Number(this.selectedstudent.student_id),
			prem_stu_name: String(this.selectedstudent.student_name),
			prem_state: this.prem_state,
			prem_parent_type: this.prem_parent_type
		};

		console.log("val", val);


		this.Student_premDataService.updateStudent_prem(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_student_prem() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}

	ngOnInit() {
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.Student_premDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.student_prem_id = Number(this.Student_premDataService.student_prem_id);

				this.prem_date = this.Student_premDataService.prem_date;
				this.prem_leave_time = this.Student_premDataService.prem_leave_time;
				this.prem_arrive_time = this.Student_premDataService.prem_arrive_time;
				this.prem_level = this.Student_premDataService.prem_level;
				this.prem_class = this.Student_premDataService.prem_class;
				this.prem_stu_id = Number(this.Student_premDataService.prem_stu_id);
				this.prem_stu_name = this.Student_premDataService.prem_stu_name;
				this.prem_state = this.Student_premDataService.prem_state;
				this.prem_parent_type = this.Student_premDataService.prem_parent_type;
			});
		var test1

		this.student_prem_id = this.student_prem_id;
		this.prem_date = this.prem_date;
		this.prem_leave_time = this.prem_leave_time;
		this.prem_arrive_time = this.prem_arrive_time;
		this.prem_level = this.prem_level;
		this.prem_class = this.prem_class;
		this.prem_stu_id = this.prem_stu_id;
		this.prem_stu_name = this.prem_stu_name;
		this.prem_state = this.prem_state;
		this.prem_parent_type = this.prem_parent_type;
	}

	add(event: MatChipInputEvent): void {
		const inputText = event.input;
		const value = event.value;

		// Add our fruit
		if ((value || '').trim()) {
			this.fruits.push({ name: value.trim() });
		}

		// Reset the input value
		if (inputText) {
			inputText.value = '';
		}
	}

	remove(fruit: any): void {
		const index = this.fruits.indexOf(fruit);

		if (index >= 0) {
			this.fruits.splice(index, 1);
		}
	}
}
