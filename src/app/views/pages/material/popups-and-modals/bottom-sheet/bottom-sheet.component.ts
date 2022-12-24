import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';
import { EmployeeDataService } from '../../../../../Services/EmployeeDataService';
import { EmployeeMaster, Employee } from '../../../../../EmployeeMaster.Model';
import { School_dataDataService } from '../../../../../Services/School_dataDataService';
import { School_dataMaster, School_data } from '../../../../../School_dataMaster.Model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Logo_converterDataService } from '../../../../../Services/Logo_converterDataService';
import { image } from './image.const';

@Component({
	selector: 'kt-bottom-sheet',
	templateUrl: './bottom-sheet.component.html'
})
export class BottomSheetComponent implements OnInit {
	@Input() school_data_data: any;
	school_id: number;
	school_man: string = "";
	school_assis1: string = "";
	school_assis2: string = "";
	school_assis3: string = "";
	school_assis4: string = "";
	school_bdala: string = "";
	school_faks: string = "";
	school_addr: string = "";
	school_dir: string = "";
	school_logo: string = "";
	
	
	public selectedimage;
	public event1;
	imgURL: any;
	receivedImageData: any;
	b64: any;
	convertedImage: any;
	currVerifiedLoanOfficerPhoto: any;

	Employees: Employee[];
	employeedepartment1: any;
	employeedepartment2: any;
	employeedepartment3: any;
	employeedepartment4: any;
	employeedepartment5: any;
	file: any;
	exampleBasic;

	public onFileChanged(event) {

		var file = event.target.files[0],
			reader = new FileReader();

        reader.onloadend = () => {
		
              this.b64 = reader.result as string;
	

			//console.log(b64); 
			
		};
	
        reader.readAsDataURL(file)
        

	}


	imageSource;
  onImageConverted() {
	  this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
	  this.Logo_converterDataService.logo = image;
	
	  this.Logo_converterDataService.AClicked('Component A is clicked!!');
	  console.log(this.imageSource);
	}

	constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer, private EmployeeService: EmployeeDataService, private School_dataDataService: School_dataDataService, private Logo_converterDataService: Logo_converterDataService) {
		this.EmployeeService.GetAllEmployee().subscribe(data => this.Employees = data,
			error => console.log(error),
			() => console.log("emp dropdown", this.Employees));
	}



	add_school() {
		//var test1
		//test1 = this.departments[this.selecteddepartment]
		//var schoolterm
		//schoolterm = this.activities[this.activity_school_term]
		//var val = {



		//	school_man: this.employeedepartment1.emp_name,
		//	school_assis1: this.employeedepartment2.emp_name,
		//	school_assis2: this.employeedepartment3.emp_name,
		//	school_assis3: this.employeedepartment4.emp_name,
		//	school_assis4: this.employeedepartment5.emp_name,
		//	school_bdala: this.school_bdala,
		//	school_faks: this.school_faks,
		//	school_addr: this.school_addr,
		//	school_dir: this.school_dir,
		//	school_logo: this.b64

		//};
		//console.log("asd", val)
		//this.School_dataDataService.addSchool_data(val).subscribe(res => {
  //          alert(res.toString());
          
		//})
       // console.log(val)
        this.Logo_converterDataService.logo = this.b64;
        console.log("btn_sheet", this.Logo_converterDataService.logo)
        this.Logo_converterDataService.AClicked('Component A is clicked!!');
	}
	//corridorsDataService: corridorsDataService;
	update_school() {

		var val = {
			school_id: Number(this.school_id),

			school_man: this.employeedepartment1.emp_name,
			school_assis1: this.employeedepartment2.emp_name,
			school_assis2: this.employeedepartment3.emp_name,
			school_assis3: this.employeedepartment4.emp_name,
			school_assis4: this.employeedepartment5.emp_name,
			school_bdala: this.school_bdala,
			school_faks: this.school_faks,
			school_addr: this.school_addr,
			school_dir: this.school_dir,
			school_logo: this.school_logo
		};

		console.log("val", val);


		this.School_dataDataService.updateSchool_data(val).subscribe(res => {
			alert(res.toString());
			(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
			(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
			(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
			(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		})

	}
	cancel_school() {
		(<HTMLInputElement>document.getElementById("save_btn")).disabled = false;
		(<HTMLInputElement>document.getElementById("save_btn")).hidden = false;
		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
	}


	ngOnInit() {

		(<HTMLInputElement>document.getElementById("update_btn")).hidden = true;
		(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = true;
		/*		(<HTMLInputElement>document.getElementById("departmentsdropdown") as ).setv*/

		this.School_dataDataService.aClickedEvent
			.subscribe((data: string) => {
				console.log("edited");
				(<HTMLInputElement>document.getElementById("save_btn")).disabled = true;
				(<HTMLInputElement>document.getElementById("save_btn")).hidden = true;
				(<HTMLInputElement>document.getElementById("update_btn")).hidden = false;
				(<HTMLInputElement>document.getElementById("cancel_btn")).hidden = false;


				this.school_id = Number(this.School_dataDataService.school_id);

				this.school_man = this.School_dataDataService.school_man;
				this.school_assis1 = this.School_dataDataService.school_assis1;
				this.school_assis2 = this.School_dataDataService.school_assis2;
				this.school_assis3 = this.School_dataDataService.school_assis3;
				this.school_assis4 = this.School_dataDataService.school_assis4;
				this.school_bdala = this.School_dataDataService.school_bdala;
				this.school_faks = this.School_dataDataService.school_faks;
				this.school_addr = this.School_dataDataService.school_addr;
				this.school_dir = this.School_dataDataService.school_dir;
				this.school_logo = this.School_dataDataService.school_logo;


			});


		var test1

		this.school_id = this.school_id;
		this.school_man = this.school_man;
		this.school_assis1 = this.school_assis1;
		this.school_assis2 = this.school_assis2;
		this.school_assis3 = this.school_assis3;
		this.school_assis4 = this.school_assis4;
		this.school_bdala = this.school_bdala;
		this.school_faks = this.school_faks;
		this.school_addr = this.school_addr;
		this.school_dir = this.school_dir;
		this.school_logo = this.school_logo;
	}
}
