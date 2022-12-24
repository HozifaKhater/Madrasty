import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class Mra7lDataService {
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public mr7la_id: number;
    public mr7la_name: string;
    public mr7la_code: number;
    public mr7la_desc: string;



    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllMra7l(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/mra7l');
    }
    GetAllMra7l_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/mra7l/id?id=' + val);
    }
    addMra7l(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/mra7l', val);
    }
    updateMra7l(val: any) {
        return this.http.put(this.APIUrl + '/mra7l', val);
    }
    deleteMra7l(id: any) {
        return this.http.delete(this.APIUrl + '/mra7l/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(Mra7lDataService);
    }
}