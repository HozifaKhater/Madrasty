import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SubjectDataService {
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public subject_id: number;
    public subject_name: string;
    public subject_desc: string;
    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllSubject(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/subject');
    }
    GetAllSubject_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/subject/id?id=' + val);
    }
    addSubject(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/subject', val);
    }
    updateSubject(val: any) {
        return this.http.put(this.APIUrl + '/subject', val);
    }
    deleteSubject(id: any) {
        return this.http.delete(this.APIUrl + '/subject/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }
}