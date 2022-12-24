import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LevelsDataService {
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public lev_id: number;
    public lev_name: string;
    public lev_class_no: string;
    public lev_desc: string;


    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllLevels(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/levels');
    }
    GetAllLevels_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/levels/id?id=' + val);
    }
    addLevels(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/levels', val);
    }
    updateLevels(val: any) {
        return this.http.put(this.APIUrl + '/levels', val);
    }
    deleteLevels(id: any) {
        return this.http.delete(this.APIUrl + '/levels/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(LevelsDataService);
    }
}