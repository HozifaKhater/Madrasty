import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class gdwel_7ssDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    public ser: number;
    public day: string;

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllgdwel_7ss(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/gdwel_7ss');
    }
    GetAllgdwel_7ss_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/gdwel_7ss/id?id=' + val);
    }
    addgdwel_7ss(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/gdwel_7ss', val);
    }
    updategdwel_7ss(val: any) {
        return this.http.put(this.APIUrl + '/gdwel_7ss', val);
    }
    deletegdwel_7ss(id: any) {
        return this.http.delete(this.APIUrl + '/gdwel_7ss/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }
}