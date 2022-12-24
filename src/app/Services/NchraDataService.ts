import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class NchraDataService {
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public nchra_id: number;
    public nchra_date: string;
    public nchra_sender: string;
    public nchra_topic: string;
    public nchra_text: string;
 

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllNchra(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/Nchra');
    }
    GetAllNchra_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/Nchra/id?id=' + val);
    }
    addNchra(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/Nchra', val);
    }
    addNchradetails(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/nchra_details', val);
    }
    updateNchra(val: any) {
        return this.http.put(this.APIUrl + '/Nchra', val);
    }
    deleteNchra(id: any) {
        return this.http.delete(this.APIUrl + '/Nchra/' + id);
    }
    deleteNchradel(id: any) {
        return this.http.delete(this.APIUrl + '/nchra_details_del/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(NchraDataService);
    }
}