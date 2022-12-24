import { Injectable, Output, EventEmitter } from '@angular/core';  
import { Http, Response, Headers } from '@angular/http';  
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';  
/*import { map } from 'rxjs/operators';*/
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class StudentDataService
{
    public student_id: number;
    public student_file_ser: string;
    public student_civilian_id: string;
    public student_sex: string;
    public student_sex_id: string;
    public student_name: string;
    public student_nationality: string;
    public student_nationality_id: string;
    public student_dob: string;
    public student_age_year: string;
    public student_age_month: string;
    public student_age_day: string;
    public student_acceptance_reason_id: string;
    public student_acceptance_reason: string;
    public student_religion: string;
    public student_religion_id: string;
    public student_district: string;
    public student_district_id: string;
    public student_school: string;
    public student_stage: string;
    public student_stage_id: string;
    public student_state: string;
    public student_state_id: string;
    public student_study_state: string;
    public student_study_state_id: string;
    public student_grade: string;
    public student_grade_id: string;
    public student_div: string;
    public student_div_id: string;
    public student_failure_years: string;
    public student_class_id: string;
    public student_class_name: string;
    public student_branch: string;

    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;  
    constructor(private http: HttpClient){}
  
    //public GetAlldepartment = (): Observable<any> =>  
    //{
      
    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());
     
    //}
    get_branch_stistics(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/student/get_branch_stistics');
    }
    GetAlldepartment(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/student');
    }
    get_start_date(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/student/start_year');
    }
    addstudents(val: any) {
        return this.http.post(this.APIUrl + '/student', val);
    }
    updatestudents(val: any) {
        return this.http.put(this.APIUrl + '/student', val);
    }
    update_student_branch(val: any) {
        return this.http.put(this.APIUrl + '/student/update', val);
    }
    GetAllstudents_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/student/id?id=' + val);
    }

    GetAllStudent_of_level(val) {
        return this.http.get<any>(this.APIUrl + '/twze3_students/student_grade_id?student_grade_id=' + val);
    }
    GetAllStudent_of_class(val) {
        return this.http.get<any>(this.APIUrl + '/student/class_id?class_id=' + val);
    }

    deletestudents(id: any) {
        return this.http.delete(this.APIUrl + '/student/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }
    @Output() bClickedEvent = new EventEmitter<string>();
    BClicked(msg: string) {
        this.bClickedEvent.emit(msg);
        console.log(msg);
    }
}  