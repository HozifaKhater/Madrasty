﻿import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class mentality_inquiriesDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    public id: number;
    public problem_type: string;
    public answer: string;
    public ntoes: string;

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllmentality_inquiries(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/mentality_inquiries');
    }
    GetAllmentality_inquiries_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/mentality_inquiries/id?id=' + val);
    }
    addmentality_inquiries(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/mentality_inquiries', val);
    }
    updatementality_inquiries(val: any) {
        return this.http.put(this.APIUrl + '/mentality_inquiries', val);
    }
    deletementality_inquiries(id: any) {
        return this.http.delete(this.APIUrl + '/mentality_inquiries/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(msg);
    }
}