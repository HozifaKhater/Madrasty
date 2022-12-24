/// <reference path="../snackbar/pizza-party.component.ts" />
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Visit_typesDataService } from '../../../../../Services/visit_typesDataService';
import { Visity_typesMaster,Visit_types } from '../../../../../Visit_typesMaster.Model';

@Component({
	selector: 'kt-material-tooltip',
	templateUrl: './material-tooltip.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialTooltipComponent implements OnInit {

	exampleBasic;
	exampleCustomPosition;
	exampleShowHigh;
	exampleDelay;
    exampleManually;
    visit_type_id: any;
    visit_type_name: any;
    is_visit_date: any;
    visit_date: any;
    is_phone: any;
    phone_label: any;
    is_start_time: any;
    start_time_label: any;
    is_end_time: any;
    end_time_label: any;
    is_name: any;
    name_label: any;
    is_topic: any;
    topic_label: any;
    is_instructions: any;
    instructions_label: any;
    is_job: any;
    job_label: any;
    is_notes: any;
    notes_label: any;
    is_dep: any;
    dep_label: any;
    is_vnote: any;
    vnote_label: any;
    is_vpic: any;
    vpic_label: any;
    test1: any;

    constructor(private Visit_typesDataService: Visit_typesDataService) {
        this.visit_date = "تاريخ الزياره"

        this.phone_label = "الهاتف"
        this.start_time_label = "وقت بدء الزياره"
        this.end_time_label = "وقت نهايه الزياره"
        this.name_label = "اسم لزائر"
        this.topic_label = "موضوع الزياره"
        this.instructions_label="توجيهات هادفه يراها الموجه الفنى"
        this.job_label = "الوظيفه"
        this.notes_label="الملاحظات الفنيه"
        this.dep_label = "القسم"
        this.vnote_label = "vNote"
        this.vpic_label="vPic"
      //  this.test1="بررر"
    }
    is_visit_date_change(event)
    {
        console.log(event)
        if (event.checked == true) {
            this.is_visit_date = 1;
           // (<HTMLInputElement>document.getElementById("visit_date_id")).setAttribute('disabled','false')
        }
        if (event.checked === false) {
            this.is_visit_date = 0;
           // (<HTMLInputElement>document.getElementById("visit_date_id")).setAttribute('disabled', 'true')
        }
    }
    is_phone_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_phone = 1;
     //       (<HTMLImageElement>document.getElementById("is_phone_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_phone = 0;
      //      (<HTMLImageElement>document.getElementById("is_phone_id")).setAttribute('disabled', 'true')
        }
    }
   is_start_time_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_start_time = 1;
        //    (<HTMLImageElement>document.getElementById("is_start_time_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_start_time = 0;
           // (<HTMLImageElement>document.getElementById("is_start_time_id")).setAttribute('disabled', 'true')
        }
    }

    is_end_time_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_end_time = 1;
           // (<HTMLImageElement>document.getElementById("is_end_time_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_end_time = 0;
         //   (<HTMLImageElement>document.getElementById("is_end_time_id")).setAttribute('disabled', 'true')
        }
    }
   is_name_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_name = 1;
          //  (<HTMLImageElement>document.getElementById("is_name_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_name = 0;
          //  (<HTMLImageElement>document.getElementById("is_name_id")).setAttribute('disabled', 'true')
        }
    }
   is_topic_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_topic = 1;
         //   (<HTMLImageElement>document.getElementById("is_topic_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_topic = 0;
          //  (<HTMLImageElement>document.getElementById("is_topic_id")).setAttribute('disabled', 'true')
        }
    }
    is_instructions_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_instructions = 1;
          //  (<HTMLImageElement>document.getElementById("is_instructions_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_instructions = 0;
         //   (<HTMLImageElement>document.getElementById("is_instructions_id")).setAttribute('disabled', 'true')
        }
    }
   is_job_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_job = 1;
          //  (<HTMLImageElement>document.getElementById("is_job_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_job = 0;
          //  (<HTMLImageElement>document.getElementById("is_job_id")).setAttribute('disabled', 'true')
        }
    }
   is_notes_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_notes = 1;
           // (<HTMLImageElement>document.getElementById("is_notes_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_notes = 0;
         //   (<HTMLImageElement>document.getElementById("is_notes_id")).setAttribute('disabled', 'true')
        }
    }
   is_dep_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_dep = 1;
          //  (<HTMLImageElement>document.getElementById("is_dep_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_dep = 0;
          //  (<HTMLImageElement>document.getElementById("is_dep_id")).setAttribute('disabled', 'true')
        }
    }
   is_vnote_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_vnote = 1;
           // (<HTMLImageElement>document.getElementById("is_vnote_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_vnote = 0;
           // (<HTMLImageElement>document.getElementById("is_vnote_id")).setAttribute('disabled', 'true')
        }
    }
    is_vpic_change(event) {
        console.log(event)
        if (event.checked == true) {
            this.is_vpic = 1;
          //  (<HTMLImageElement>document.getElementById("is_vpic_id")).setAttribute('disabled', 'false')
        }
        if (event.checked === false) {
            this.is_vpic = 0;
           // (<HTMLImageElement>document.getElementById("is_vpic_id")).setAttribute('disabled', 'true')
        }
    }
	position = 'before';
    add() {
        //var test1
        //test1 = this.departments[this.selecteddepartment]
        //var schoolterm
        //schoolterm = this.activities[this.activity_school_term]
        var val = {
           //visit_type_id : this.Visit_typesDataService.visit_type_id,
            visit_type_name: this.visit_type_name,
            is_visit_date: this.is_visit_date,
            visit_date: this.visit_date,
            is_phone: this.is_phone,
            phone_label: this.phone_label,
            is_start_time: this.is_start_time,
            start_time_label: this.start_time_label,
            is_end_time: this.is_end_time,
            end_time_label: this.end_time_label,
            is_name: this.is_name,
            name_label: this.name_label,
            is_topic: this.is_topic,
            topic_label: this.topic_label,
            is_instructions: this.is_instructions,
            instructions_label: this.instructions_label,
            is_job: this.is_job,
            job_label: this.job_label,
            is_notes: this.is_notes,
            notes_label: this.notes_label,
            is_dep: this.is_dep,
            dep_label: this.dep_label,
            is_vnote: this.is_vnote,
            vnote_label: this.vnote_label,
            is_vpic: this.is_vpic,
            vpic_label: this.vpic_label


        };
        console.log("asd", val)
        this.Visit_typesDataService.addvisit_types(val).subscribe(res => {
            alert(res.toString());
        })
        console.log(val)
    }
    butDisabled: boolean;
    update() {
        var val = {
            visit_type_id : this.Visit_typesDataService.visit_type_id,
            visit_type_name: this.visit_type_name,
            is_visit_date: this.is_visit_date,
            visit_date: this.visit_date,
            is_phone: this.is_phone,
            phone_label: this.phone_label,
            is_start_time: this.is_start_time,
            start_time_label: this.start_time_label,
            is_end_time: this.is_end_time,
            end_time_label: this.end_time_label,
            is_name: this.is_name,
            name_label: this.name_label,
            is_topic: this.is_topic,
            topic_label: this.topic_label,
            is_instructions: this.is_instructions,
            instructions_label: this.instructions_label,
            is_job: this.is_job,
            job_label: this.job_label,
            is_notes: this.is_notes,
            notes_label: this.notes_label,
            is_dep: this.is_dep,
            dep_label: this.dep_label,
            is_vnote: this.is_vnote,
            vnote_label: this.vnote_label,
            is_vpic: this.is_vpic,
            vpic_label: this.vpic_label
        };

        console.log("val", val);


        this.Visit_typesDataService.updatevisit_types(val).subscribe(res => {
            alert(res.toString());
            (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
            (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
            (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
            (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
        })

    }
    cancel() {
        (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
        (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
    }
	ngOnInit() {


        this.Visit_typesDataService.aClickedEvent
            .subscribe((data: string) => {
                console.log("edited");
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

                this.visit_type_id = this.Visit_typesDataService.visit_type_id;
                this.visit_type_name = this.visit_type_name;
                this.is_visit_date = this.is_visit_date;
                this.visit_date = this.visit_date;
                this.is_phone = this.is_phone;
                this.phone_label = this.phone_label;
                this.is_start_time = this.is_start_time;
                this.start_time_label = this.start_time_label;
                this.is_end_time = this.is_end_time;
                this.end_time_label = this.end_time_label;
                this.is_name = this.is_name;
                this.name_label = this.name_label;
                this.is_topic = this.is_topic;
                this.topic_label = this.topic_label;
                this.is_instructions = this.is_instructions;
                this.instructions_label = this.instructions_label;
                this.is_job = this.is_job;
                this.job_label = this.job_label;
                this.is_notes = this.is_notes;
                this.notes_label = this.notes_label;
                this.is_dep = this.is_dep;
                this.dep_label = this.dep_label;
                this.is_vnote = this.is_vnote;
                this.vnote_label = this.vnote_label;
                this.is_vpic = this.is_vpic;
                this.vpic_label = this.vpic_label;



                console.log(this.Visit_typesDataService.visit_type_name)
                /*	document.getElementById("save_btn").innerHTML="asdasd"*/
                console.log("edited")

            });
	}
}
