import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class School_year_dataDataService {
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public year_data_id: number;
    public year_date_from: string;
    public year_date_to: string;



    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllSchool_year_data(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/school_year_data');
    }
    GetAllSchool_year_data_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/school_year_data/id?id=' + val);
    }
    addSchool_year_data(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/school_year_data', val);
    }
    addSchool_year_details(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/school_year_details', val);
    }
    updateSchool_year_data(val: any) {
        return this.http.put(this.APIUrl + '/school_year_data', val);
    }
    deleteSchool_year_data(id: any) {
        return this.http.delete(this.APIUrl + '/school_year_data/' + id);
    }
    deleteSchool_year_details(id: any) {
        return this.http.delete(this.APIUrl + '/school_year_details/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(this.year_date_from);
    }
}