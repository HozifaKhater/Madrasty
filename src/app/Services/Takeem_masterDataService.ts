import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class Takeem_masterDataService {
    public takeem_id: number;
    public evaluation_id: string;
    public evaluation_object: string;
    public evaluation_object_name: string;
    public evaluation_subject: string;
    public evaluation_subject_id: string;
    public the_object_id: string;
    public evaluation_date: string;




    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllTakeem_master(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/Takeem_master');
    }
    GetAllTakeem_master_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/Takeem_master/id?id=' + val);
    }
    addTakeem_master(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/Takeem_master', val);
    }
    updateTakeem_master(val: any) {
        return this.http.put(this.APIUrl + '/Takeem_master', val);
    }

    deleteTakeem_master(id: any) {
        return this.http.delete(this.APIUrl + '/Takeem_master/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }
}