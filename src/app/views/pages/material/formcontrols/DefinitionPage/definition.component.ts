import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Definition } from '../../../../../Definitions.Model';
import { DefinitionDataService } from '../../../../../Services/Definition';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'kt-Definitions',
	templateUrl: './definition.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,

})

export class DefinitionComponent implements OnInit {

    def_id: string = "";
    def_name: string = "";
    s_code: string = "";
    s_code_arabic: string = "";

    selected: string;
    scodes: Definition[];
    selectedCode: any;
    form1: FormGroup;
    butDisabled: boolean;


    constructor(public _fb: FormBuilder, private DefinitionService: DefinitionDataService) {
        this.form1 = this._fb.group({
            def_name_f: ['', [Validators.required]],
            s_code_arabic: ['', [Validators.required]]
        });

        this.DefinitionService.GetSCodes().subscribe(data => this.scodes = data,
            error => console.log(error),
            () => { console.log("scodes dropdown", this.scodes) });
    }


    add_definition() {

        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        }else {
            var chck;
            
            if (this.butDisabled == true) {
                chck = Number(this.def_id);
                console.log("check  ", chck);
            };

            var newDefinition = {
                def_name: this.def_name,
                s_code: this.scodes.find(e => e.s_code_arabic == this.selected).s_code,
                s_code_arabic: this.selected,
                def_id: Number(chck)
            };

            this.DefinitionService.addDefinition(newDefinition).subscribe(res => {
                alert(res.toString());
            })

            this.form1.reset();

        }
    }

    update_definition() {
        //var definition = this.scodes[this.selectedCode];

        var chck;

        if (this.butDisabled == false) {
            chck = Number(this.def_id);
            console.log("selected code ", chck );
        };

        var updatedDefinition = {
            def_name: this.def_name,
            s_code: this.scodes.find(e => e.s_code_arabic == this.selected).s_code,
            s_code_arabic: this.selected,
            def_id: Number(chck)
        };

        console.log("updatedDefinition", updatedDefinition);

        this.DefinitionService.updateDefinition(updatedDefinition).subscribe(res => {
            alert(res.toString());
            (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
            (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
            (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
            (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
        })

    }

    cancel_definition() {
        this.form1.reset();
        (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
        (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
    }


    initModelForm(): FormGroup {
        return this._fb.group({
            otherControls: [''],
            // The formArray, empty 
            myChoices: new FormArray([]),
        })
    }
    myForm: FormGroup = this.initModelForm();

    ngOnInit(): void {

        this.butDisabled = true;
        (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
        (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;

        this.DefinitionService.aClickedEvent
            .subscribe((data: string) => {
                if (Number(this.DefinitionService.def_id) != 0) {

                    this.butDisabled = false;

                    var selected_value = this.DefinitionService.def_id
                    this.selectedCode = this.scodes[this.scodes.findIndex(function (el) {
                        return el.def_id == selected_value
                    })];
                }

                (<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;

                this.def_id = this.DefinitionService.def_id.toString();
                this.def_name = this.DefinitionService.def_name;
                this.s_code = this.DefinitionService.s_code;
                this.s_code_arabic = this.DefinitionService.s_code_arabic;
                this.selected = this.DefinitionService.s_code_arabic;

            });

        
    }


}

