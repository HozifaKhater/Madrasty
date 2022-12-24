import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SubjectDataService } from '../../../../../Services/SubjectDataService';
import { SubjectMaster, Subjects } from '../../../../../SubjectMaster.Model';
import {ta7dier_masterDataService  } from '../../../../../Services/Ta7dier_masterDataService';
@Component({
	selector: 'kt-button',
	templateUrl: './button.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.example-button-row {
		display: flex;
		align-items: center;
		justify-content: space-around;
	  }
	`]
})


export class ButtonComponent implements OnInit {


    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
	exampleBasic;
	exampleRaised;
	exampleIcon;
	exmapleFab;
	exampleMiniFav;
	bind_ta7diers(event) {
		this.ta7dier_masterDataService.subject_id = event.source.value.subject_id;
		this.ta7dier_masterDataService.BindClicked(event.source.value.subject_id);
	}
	subjects: Subjects[];
	constructor(private SubjectDataService: SubjectDataService, private ta7dier_masterDataService: ta7dier_masterDataService) {
		this.SubjectDataService.GetAllSubject().subscribe(data => this.subjects = data,
			error => console.log(error),
			() => { console.log("department dropdown") });
	}

	ngOnInit() {

	}
}
