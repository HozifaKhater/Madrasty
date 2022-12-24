import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class VisitsDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    public visit_id: number;
    public visit_type_name: string;
    public visit_type_id: string;
    public visit_date: string;
    public phone: string;
    public start_time: string;
    public end_time: string;
    public name: string;
    public topic: string;
    public instructions: string;
    public job: string;
    public notes: string;
    public dep_name: string;
    public dep_id: string;
    public vnote: string;
    public student_attendance_precent: string;

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllVisits(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/visits');
    }
    GetAllvisit_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/visits/id?id=' + val);
    }
    addvisits(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/visits', val);
    }
    addstudent_attendance_precent(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/visits/student_attendance_precent', val);
    }
    updatevisits(val: any) {
        return this.http.put(this.APIUrl + '/visits', val);
    }
    deletevisits(id: any) {
        return this.http.delete(this.APIUrl + '/visits/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }
}