import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
//import { PizzaParty1Component } from './pizza-party.component';

import {Visity_typesMaster,Visit_types} from '../../../../../Visit_typesMaster.Model';
import { Visit_typesDataService } from '../../../../../Services/Visit_typesDataService';

import {Visits,VisitsMaster} from '../../../../../VisitsMaster';
import { VisitsDataService } from '../../../../../Services/visitsDataService';

import { Departments,DepartmentMaster } from '../../../../../DepartmentMaster.Model';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';

import moment from 'moment';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from "@ckeditor/ckeditor5-angular/ckeditor.component";
import { DatePipe } from '@angular/common';
//import { PizzaPartyComponent } from '../snackbar/pizza-party.component';

@Component({
	selector: 'kt-visit',
	templateUrl: './visits.component.html',
	styles: [`
	`]
})
export class VisitComponent implements OnInit {

    public Editor = ClassicEditor;
    @ViewChild("myEditor", { static: false }) myEditor: any;

	exampleBasic;
	exampleCustom;
	exampleDismissal;
    visit_types: Visity_typesMaster[];
    Visit_types_model: Visit_types[];
    departments: Departments[];
    selecteddepartment: any;
    selected_visit_type: any;
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
    public visit_id: number = 0;
  
    public visit_date_db: string="";
    public phone: string = "";
    public start_time: string = "";
    public end_time: string = "";
    public name: string = "";
    public topic: string = "";
    public instructions: string = "";
    public job: string = "";
    public notes: string = "";
    public dep_name: string = "";
    public dep_id: string = "0";
    public vnote: string = "";
    public vpic: string = "";
    constructor(private datePipe: DatePipe,public snackBar: MatSnackBar,
        private Visit_typesDataService: Visit_typesDataService,
        private VisitsDataService: VisitsDataService,
        private DepartmentDataService: DepartmentDataService) {
        //let d = new Date();
        //this.year_date_from = String( d.getDate());
        this.Visit_typesDataService.GetAllVisit_types().subscribe(data => this.visit_types = data,
            error => console.log(error),
            () => { console.log("visit_types dropdown", this.visit_types) });
        this.DepartmentDataService.GetAlldepartment().subscribe(data => this.departments = data,
            error => console.log(error),
            () => { console.log("DepartmentDataService dropdown", this.departments) });

        let d_from = new Date();
        d_from.setDate(d_from.getDate());
       // console.log("tmr data", this.datePipe.transform(d_from, 'yyyy-MM-dd'))
        this.year_date_from = this.datePipe.transform(d_from, 'yyyy-MM-dd');
       
    }
    
    visit_types_selection(event) {
        this.visit_type_id = event.visit_visit_type_id;
        this.visit_type_name = event.visit_type_name;
        console.log("visit_types dropdown change", event);
        this.Visit_typesDataService.GetAllvisit_types_with_id(event.visit_type_id).subscribe(data => this.Visit_types_model = data,
            error => console.log(error),
            () => {
                console.log("visit_types dropdown change", this.Visit_types_model);
                
                this.is_visit_date = this.Visit_types_model[0].is_visit_date;
                this.visit_date = this.Visit_types_model[0].visit_date;
                this.is_phone = this.Visit_types_model[0].is_phone;
                this.phone_label = this.Visit_types_model[0].phone_label;
                this.is_start_time = this.Visit_types_model[0].is_start_time;
                this.start_time_label = this.Visit_types_model[0].start_time_label;
                this.is_end_time = this.Visit_types_model[0].is_end_time;
                this.end_time_label = this.Visit_types_model[0].end_time_label;
                this.is_name = this.Visit_types_model[0].is_name;
                this.name_label = this.Visit_types_model[0].name_label;
                this.is_topic = this.Visit_types_model[0].is_topic;
                this.topic_label = this.Visit_types_model[0].topic_label;
                this.is_instructions = this.Visit_types_model[0].is_instructions;
                this.instructions_label = this.Visit_types_model[0].instructions_label;
                this.is_job = this.Visit_types_model[0].is_job;
                this.job_label = this.Visit_types_model[0].job_label;
                this.is_notes = this.Visit_types_model[0].is_notes;
                this.notes_label = this.Visit_types_model[0].notes_label;
                this.is_dep = this.Visit_types_model[0].is_dep;
                this.dep_label = this.Visit_types_model[0].dep_label;
                this.is_vnote = this.Visit_types_model[0].is_vnote;
                this.vnote_label = this.Visit_types_model[0].vnote_label;
                this.is_vpic = this.Visit_types_model[0].is_vpic;
                this.vpic_label = this.Visit_types_model[0].vpic_label;
            });
    }

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

	//openSnackBar2() {
	//	this.snackBar.openFromComponent(PizzaPartyComponent, {
	//	  duration: 500,
	//	});
	//}

	openSnackBar3(message: string, action: string) {
		this.snackBar.open(message, action, {
		  duration: 6500,
		});
	  }
    fieldArray: Array<any> = [
        {
            name: '',
            name1:''
           
        }
    ];
    newAttribute: any = {};

    firstField = true;
    firstFieldName = 'First Item name';
    isEditItems: boolean;

    // candidates: any[] = [
    //   {
    //     'name': 'Default Name',
    //     'title': 'Job Title',
    //   },
    //   {
    //     'name': 'Default Name 2',
    //     'title': 'Job Title',
    //   }
    // ];
    year_date_to: string;
    year_date_from: string;
    addFieldValue(index) {
        console.log("field",index)
        if (index != 0) {
            this.fieldArray.push(this.newAttribute);
            console.log("zzzzz", this.fieldArray, this.newAttribute)
            this.newAttribute = {};
        }

    }

    deleteFieldValue(index) {
        if (index != 0) {
            this.fieldArray.splice(index, 1);
            console.log("delete", index)
        }
    }
    returned_id: any;
    add_year() {

        var val = {
            
            visit_type_name: this.visit_type_name,
            visit_type_id: this.visit_type_id,
            visit_date: this.visit_date_db,
            phone: this.phone,
            start_time: this.start_time,
            end_time: this.end_time,
            name: this.name,
            topic: this.topic,
            instructions: this.instructions,
            job: this.job,
            notes: this.notes,
            dep_name: this.dep_name,
            dep_id: this.dep_id,
            vnote: this.vnote

        };
        console.log("asd", val)
        this.VisitsDataService.addvisits(val).subscribe(res => {
          
            alert("Added Successfuly");
        })
        
        console.log(val)
    }
    update_year() {

       
        var val = {
            visit_id: this.visit_id,
            visit_type_name: this.visit_type_name,
            visit_type_id: this.visit_type_id,
            visit_date: this.visit_date_db,
            phone: this.phone,
            start_time: this.start_time,
            end_time: this.end_time,
            name: this.name,
            topic: this.topic,
            instructions: this.instructions,
            job: this.job,
            notes: this.notes,
            dep_name: this.dep_name,
            dep_id: this.dep_id,
            vnote: this.vnote

        };
        console.log("asd", val)
        this.VisitsDataService.updatevisits(val).subscribe(res => {

            alert("Added Successfuly");
        })

        

    }
    cancel_year() {
        (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
        (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
    }
    year_data_id: any;
	ngOnInit() {

        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
        /*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

        this.VisitsDataService.aClickedEvent
            .subscribe((data: string) => {
                //this.newArray = [];
                console.log("edited");
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

                this.visit_id = this.VisitsDataService.visit_id;
               // this.visit_type_name = this.VisitsDataService.visit_type_name;
              //  this.visit_type_id = this.VisitsDataService.visit_type_id;
                this.visit_date_db = this.VisitsDataService.visit_date;
                this.phone = this.VisitsDataService.phone;
                this.start_time = this.VisitsDataService.start_time;
                this.end_time = this.VisitsDataService.end_time;
                this.name = this.VisitsDataService.name;
                this.topic = this.VisitsDataService.topic;
                this.instructions = this.VisitsDataService.instructions;
                this.job = this.VisitsDataService.job;
                this.notes = this.VisitsDataService.notes;
               // this.dep_name = this.VisitsDataService.dep_name;
               // this.dep_id = this.VisitsDataService.dep_id;
                this.vnote = this.VisitsDataService.vnote;

                var selected_value = this.VisitsDataService.visit_type_id
                this.selected_visit_type = this.visit_types[this.visit_types.findIndex(function (el) {
                    return String(el.visit_type_id) == selected_value
                })];

                var selected_value = this.VisitsDataService.dep_id
                this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
                    return String(el.dep_id) == selected_value
                })];

                console.log("year_date_from", this.visit_type_name);
            })
       
	}
}
