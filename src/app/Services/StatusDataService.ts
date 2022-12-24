import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class statusDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
      public id: number;
    public status_name: string;
    public status_id: string;
    public level_id: string;
    public level_name: string;
    public class_id: string;
    public class_name: string;
    public student_name: string;
    public student_id: string;
    public dob: string;
    public notes: string;

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllstatus(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/status');
    }
    GetAllstatus_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/status/id?id=' + val);
    }
    addstatus(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/status', val);
    }
    updatestatus(val: any) {
        return this.http.put(this.APIUrl + '/status', val);
    }
    deletestatus(id: any) {
        return this.http.delete(this.APIUrl + '/status/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(msg);
    }
}