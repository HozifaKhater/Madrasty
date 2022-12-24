import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { DepartmentDataService } from '../../../../../Services/DepartmentDataService';
import { DepartmentMaster, Departments } from '../../../../../DepartmentMaster.Model';
import { Http, Response, Headers } from '@angular/http';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { CustomerModel } from '../../../../../core/e-commerce';
import { CustomersListComponent } from '../../../apps/e-commerce/customers/customers-list/customers-list.component';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { EmployeeMaster, Employee } from '../../../../../EmployeeMaster.Model';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
	selector: 'kt-checkbox',
	templateUrl: './checkbox.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styles: [
		`
		.example-h2 {
			margin: 10px;
		}
		.example-section {
			display: flex;
			align-content: center;
			align-items: center;
			height: 60px;
		}
		.example-margin {
			margin: 0 10px;
		}
	`
	]
	/*,providers: [DepartmentDataService]*/
})
export class CheckboxComponent implements OnInit {

	@Input() department_data: any;
	dep_id: string = "";
	dep_name: string = "";

	dep_desc: string = "";
	dep_supervisor_id: string = "";
	dep_supervisor_name: string = "";


	Employees: Employee[];
	departments: Departments[];
	 selecteddepartment: any;
	employeedepartment: any;
	exampleBasicCheckboxes;
	exampleConfigurableCheckbox;
	exampleLabelPositions;
	exampleChangeEvent;
	foods = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' }
	];
	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;
	labelPosition: string = 'before';
	myValue: boolean = true;
    myControl = new FormControl('');;
    form1: FormGroup;
	constructor(public _fb: FormBuilder,private DepartmentService: DepartmentDataService, private EmployeeService: EmployeeDataService) {
        this.form1 = this._fb.group({
            dep_name_f: ['', [Validators.required]],
            dep_desc_f: ['', [Validators.required]],
            emp_f: ['', [Validators.required]]
        });

        //this.form1 = this._fb.group({
        //    dep_name_f: ["", Validators.compose([
        //        Validators.required,

               
        //    ])
        //    ],
        //    dep_desc_f: ["", Validators.compose([
        //        Validators.required,
                
        //    ])
        //    ]
        //});
		this.DepartmentService.GetAllMasterdepartment().subscribe(data => this.departments = data,
			error => console.log(error),
			() => { console.log("department dropdown", this.departments) });
		
		/*this.dep_name="abc"*/
		/*this.onChange()*/
	
	
	}
 


	butDisabled: boolean;
	onChange(): void {
		this.dep_name = "adasd";
		
		//get your items list based on the selected category
	}
	selected(test1, test2)
	{
		console.log("worked?", test1, test2)
	}
	depdropdown(event)
	{
		console.log("worked!",event)
	}

	add_department() {
        //const controls = this.form1.controls;
        //if (this.form1.invalid) {
        //    Object.keys(controls).forEach(controlName =>
        //        controls[controlName].markAsTouched()
        //    );
        //    return;
        //}
     


        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
           	var chck;

		if (this.butDisabled == true) {
			chck = 0
			console.log("val", 0);
		}
		 if (this.butDisabled == false)
		{
			 chck = Number(this.selecteddepartment.dep_id);
			console.log("val", 1);
		};


		/*console.log("emp", , this.employeedepartment );*/
		var val = {

			dep_name: this.dep_name,
			dep_desc: this.dep_desc,
			dep_supervisor_id: this.employeedepartment.emp_id,
			dep_supervisor_name: this.employeedepartment.emp_name,
			parent_id: Number(chck)
		};

		console.log("val", val);


	this.DepartmentService.addDepartment(val).subscribe(res => {
		alert(res.toString());
		})

        console.log(val);

            this.form1.reset();
            //for (let name in this.form1.controls) {
            //    this.form1.controls[name].setErrors(null);
            //}
            
        }
	
    }
    isControlHasError(controlName: string, validationType: string): boolean {
        const control = this.form1.controls[controlName];
        if (!control) {
            return false;
        }

        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }

	initModelForm(): FormGroup {
		return this._fb.group({
			otherControls: [''],
			// The formArray, empty 
			myChoices: new FormArray([]),
		})
}
	myForm: FormGroup = this.initModelForm();
	onCheckChange(event) {
		const formArray: FormArray = this.myForm.get('myChoices') as FormArray;

		/* Selected */
		if (event.target.checked) {
			// Add a new control in the arrayForm
			formArray.push(new FormControl(event.target.value));
		}
		/* unselected */
		else {
			// find the unselected element
			let i: number = 0;

			formArray.controls.forEach((ctrl: FormControl) => {
				if (ctrl.value == event.target.value) {
					// Remove the unselected element from the arrayForm
					formArray.removeAt(i);
					return;
				}

				i++;
			});
		}
		console.log("arrayofchecks",formArray.value)
    }

    update_department() {
        if (this.form1.invalid) {
            console.log('Form invalid...');
            this.form1.markAllAsTouched();
        } else {
            var department;
            department = this.departments[this.selecteddepartment];
            var emp;
            emp = this.Employees[this.employeedepartment];
            var chck;
            //console.log("department", this.departments, department, "department", this.selecteddepartment.dep_name, emp, this.Employees);
            if (this.butDisabled == true) {
                chck = 0
                console.log("val", 0);
            }
            if (this.butDisabled == false) {
                chck = Number(this.selecteddepartment);
                console.log("val", 1);
            };

            /*console.log("emp", emp, this.employeedepartment );*/
            var val = {
                dep_id: Number(this.DepartmentService.dep_id),
                dep_name: this.dep_name,
                dep_desc: this.dep_desc,
                dep_supervisor_id: Number(this.employeedepartment.emp_id),
                dep_supervisor_name: this.employeedepartment.emp_name,
                parent_id: Number(chck)
            };

            console.log("val", val);


            this.DepartmentService.updateDepartment(val).subscribe(res => {
                alert(res.toString());
                this.form1.reset();
                (<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
                (<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
                (<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
                (<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
            })
        }
	}
    cancel_department() {
        this.form1.reset();
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}
	side_dep_chck_change(event) {
		//if ((<HTMLInputElement>document.getElementById("side_dep_chck")).checked = true) {
		//	console.log("checked changed")
		//}
		console.log(event)
		if (event.checked == true) {
			this.butDisabled = false;
		}
		if (event.checked === false) {
			this.butDisabled = true;
		}
	}
    dep_check: any;
    filteredOptions: Observable<any[]>;
    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.Employees.filter(option => option.emp_name.toLowerCase().includes(filterValue));
    }
    displayFn(selectedoption) {
        return selectedoption ? selectedoption.emp_name : undefined;
    }
    test1: any[];
    ngOnInit() {
        this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
            error => console.log(error),
            () => {
                console.log("emp dropdown", this.Employees);
                this.filteredOptions = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => typeof value === 'string' ? value : value.emp_name),
                        map(emp_name => emp_name ? this._filter(emp_name) : this.Employees.slice())
                    );
            });
		this.butDisabled = true;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/
		
		this.DepartmentService.aClickedEvent
			.subscribe((data: string) => {
				this.dep_check = false;
				if (Number(this.DepartmentService.parent_id) != 0) {
					this.dep_check = true;
					var selected_value = this.DepartmentService.parent_id
					this.selecteddepartment = this.departments[this.departments.findIndex(function (el) {
						return el.dep_id == selected_value
					})];/*x => x.dep_id === this.DepartmentService.parent_id)];*/
				}
				
			
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;
				/*this.employeedepartment.emp_id = 1;*/
				/*this.selecteddepartment.dep_id = Number(this.DepartmentService.dep_id);*/

				console.log("department",this.selecteddepartment);
				this.dep_id = this.DepartmentService.dep_id;
				this.dep_name = this.DepartmentService.dep_name;
				this.dep_desc = this.DepartmentService.dep_desc;
				this.departments[this.DepartmentService.dep_id];

				console.log("notyeredited", this.Employees, this.DepartmentService.dep_supervisor_id, "index", this.Employees.findIndex(x => x.emp_id  === this.DepartmentService.dep_supervisor_id), this.DepartmentService.dep_supervisor_id )
				var selected_value_emp = this.DepartmentService.dep_supervisor_id;
				this.employeedepartment = this.Employees[this.Employees.findIndex(x => x.emp_id === selected_value_emp )];//Number(this.DepartmentService.dep_supervisor_id)
				console.log(this.departments)
			/*	document.getElementById("save_btn").innerHTML="asdasd"*/
				console.log("edited")
				
			});
		
	/*	test1 = this.departments[this.selecteddepartment - 1]*/

		//this.dep_id = this.dep_id;
		//this.dep_name = this.dep_name;
		//this.dep_check = this.dep_check;
		//this.dep_desc = this.dep_desc;
		//this.dep_supervisor_id = this.test1[0].dep_id
		//this.dep_supervisor_name = this.test1[0].dep_name
	}

	changeLablesPositions() {
		this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
	}

	changeValueEvent() {
		console.log('myValue:', this.myValue);
	}


}
