import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class School_dataDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;

    public school_id: number;
    public school_man: string;
    public school_assis1: string;
    public school_assis2: string;
    public school_assis3: string;
    public school_assis4: string;
    public school_bdala: string;
    public school_faks: string;
    public school_addr: string;
    public school_dir: string;
    public school_logo: string;

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllSchool_data(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/school_data');
    }
    get_school_year_data_for_dropdown(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/school_data/year_data_dropdown');
    }
    GetAllSchool_data_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/school_data/id?id=' + val);
    }
    addSchool_data(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/school_data', val);
    }
    updateSchool_data(val: any) {
        return this.http.put(this.APIUrl + '/school_data', val);
    }
    deleteSchool_data(id: any) {
        return this.http.delete(this.APIUrl + '/school_data/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(School_dataDataService);
    }
}