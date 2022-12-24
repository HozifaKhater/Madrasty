import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PizzaPartyComponent } from './pizza-party.component';

import { School_year_data,School_year_dataMaster} from '../../../../../School_year_dataMaster.Model';
import { School_year_dataDataService } from '../../../../../Services/School_year_dataDataService';
import moment from 'moment';


@Component({
	selector: 'kt-snackbar',
	templateUrl: './snackbar.component.html',
	styles: [`
	`]
})
export class SnackbarComponent implements OnInit {

	exampleBasic;
	exampleCustom;
	exampleDismissal;

    constructor(public snackBar: MatSnackBar, private School_year_dataDataService: School_year_dataDataService) { }

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

	openSnackBar2() {
		this.snackBar.openFromComponent(PizzaPartyComponent, {
		  duration: 500,
		});
	}

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

            year_date_from: moment(this.year_date_from).format('DD/MM/YYYY'),
            year_date_to: moment(this.year_date_to).format('DD/MM/YYYY'),
        };
        console.log("asd", val)
        this.School_year_dataDataService.addSchool_year_data(val).subscribe(res => {
            this.returned_id = res.toString(); console.log(res.toString(), this.returned_id);
            for (let i = 0; i < this.fieldArray.length; i++) {
                var val2 = {
                    year_data_id: Number(this.returned_id),
                    term_date_from: moment(this.fieldArray[i].name).format('DD/MM/YYYY'),
                    term_date_to: moment(this.fieldArray[i].name1).format('DD/MM/YYYY')
                   
                }
                this.School_year_dataDataService.addSchool_year_details(val2).subscribe(res => { console.log("val2", val2) })
                console.log("checkbox array", this.fieldArray[i])
            }

        })
        alert("Saved Successfuly");
        console.log(val)
    }
    update_year() {

        /*console.log("emp", emp, this.employeedepartment );*/
        var val = {
          

                year_date_from: moment(this.year_date_from).format('DD/MM/YYYY'),
                year_date_to: moment(this.year_date_to).format('DD/MM/YYYY'),
            

        };

        console.log("val", val);


        this.School_year_dataDataService.updateSchool_year_data (val).subscribe(res => {
            alert(res.toString());
            (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
            (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
            (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
            (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            this.School_year_dataDataService.deleteSchool_year_details(Number(this.School_year_dataDataService.year_data_id)).subscribe(res => {
                this.School_year_dataDataService.addSchool_year_details(val).subscribe(res => {
                    this.returned_id = res.toString(); console.log(res.toString(), this.returned_id);
                    for (let i = 0; i < this.fieldArray.length; i++) {
                        var val2 = {
                            year_data_id: Number(this.returned_id),
                            term_date_from: moment(this.fieldArray[i].name).format('DD/MM/YYYY'),
                            term_date_to: moment(this.fieldArray[i].name1).format('DD/MM/YYYY')

                        }
                        this.School_year_dataDataService.addSchool_year_details(val2).subscribe(res => { console.log("val2", val2) })
                        console.log("checkbox array", this.fieldArray[i])
                    }

                })
            })
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

        this.School_year_dataDataService.aClickedEvent
            .subscribe((data: string) => {
                //this.newArray = [];
                console.log("edited");
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

                this.year_data_id = Number(this.School_year_dataDataService.year_data_id);
                this.year_date_from = this.School_year_dataDataService.year_date_from;
                this.year_date_to = this.School_year_dataDataService.year_date_to;
                console.log("year_date_from", this.year_date_from);
            })
        this.year_date_from = this.year_date_from;
        this.year_date_to = this.year_date_to;
	}
}
