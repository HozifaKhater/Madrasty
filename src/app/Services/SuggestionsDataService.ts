﻿import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SuggestionsDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    public sugg_id: number;
    public sugg_body: string;
    public sugg_title: string;
    public sugg_file: string;
    public sugg_type: string;


    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllSuggestions(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/suggestions');
    }
    GetAllSuggestions_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/suggestions/id?id=' + val);
    }
    addSuggestions(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/suggestions', val);
    }
    updateSuggestions(val: any) {
        return this.http.put(this.APIUrl + '/suggestions', val);
    }

    deleteSuggestions(id: any) {
        return this.http.delete(this.APIUrl + '/suggestions/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(SuggestionsDataService);
    }
}