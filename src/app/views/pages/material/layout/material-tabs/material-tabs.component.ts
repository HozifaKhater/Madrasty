
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material';
import { PizzaPartyComponent } from '../../popups-and-modals/snackbar/pizza-party.component';
import { corridorsDataService } from '../../../../../Services/CorridorsDataService';

@Component({
	selector: 'kt-material-tabs',
	templateUrl: './material-tabs.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [`
	.demo-tab-group {
		border: 1px solid #e8e8e8;
	  }
	  .demo-tab-content {
		padding: 16px;
	  }
	`]
})
export class MaterialTabsComponent implements OnInit {
    @Input() corridors_data: any;
    corridor_id: number;
    corridor_name: string;
    corridor_desc: string = "";

    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];
    isHuman: boolean = true;
    isHuman2: boolean = true;
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    fruits = [
        { name: 'العاشر1', id:1 },
        { name: 'العاشر2', id: 2 },
        { name: 'العاشر3', id: 3 },
    ];

    constructor(private corridorsDataService: corridorsDataService) { }
    add_corridors() {
        //var test1
        //test1 = this.departments[this.selecteddepartment]
        //var schoolterm
        //schoolterm = this.activities[this.activity_school_term]
        var val = {

            corridor_name: this.corridor_name,
            corridor_desc: this.corridor_desc

        };
        console.log("asd", val)
        this.corridorsDataService.addCorridors(val).subscribe(res => {
            alert(res.toString());
        })
        console.log(val)
    }
    //corridorsDataService: corridorsDataService;
    update_corridors() {
       
        var val = {
            corridor_id: this.corridorsDataService.corridor_id,
            corridor_name: this.corridor_name,
            corridor_desc: this.corridor_desc,
           
        };

        console.log("val", val);


        this.corridorsDataService.updateCorridors(val).subscribe(res => {
            alert(res.toString());
            (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
            (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
            (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
            (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
        })

    }
    cancel_corridros() {
        (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
        (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
    }
    ngOnInit() {
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
        /*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

        this.corridorsDataService.aClickedEvent
            .subscribe((data: string) => {
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
           
                this.corridor_id = this.corridorsDataService.corridor_id;
                this.corridor_name = this.corridorsDataService.corridor_name;
                this.corridor_desc = this.corridorsDataService.corridor_desc;
           
                /*	document.getElementById("save_btn").innerHTML="asdasd"*/
                console.log("edited")

            });
        this.corridor_id = this.corridor_id;
        this.corridor_name = this.corridor_name;
        this.corridor_desc = this.corridor_desc;
    }

    onChange(value) {
        this.isHuman = value.checked === true;
    }

    onChange2(value) {
        this.isHuman2 = value.checked === true;
    }



    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim(), id:Number(value) });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(fruit: any): void {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }


    }

