import { EventEmitter, Injectable, Output } from '@angular/core';  
import { Http, Response, Headers } from '@angular/http';  
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';  
/*import { map } from 'rxjs/operators';*/
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TripsDataService
{
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
  public trip_id: number;
    public dep_id: string;
    public dep_name: string;
    public emp_id: string;
    public emp_name: string;
    public trip_loc: string;
    public trip_date: string;
    public trip_time: string;
    public trip_duration: string;
    public trip_goals: string;
    public trip_notes: string;
    constructor(private http: HttpClient){}
  
    //public GetAlldepartment = (): Observable<any> =>  
    //{
      
    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());
     
    //}
    GetAlltrips(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/trips');
    }
    GetAlltrips_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/trips/id?id=' + val);
    }
    addtrips(val: any) {
        return this.http.post(this.APIUrl + '/trips', val);
    }
    updatetrips(val: any) {
        return this.http.put(this.APIUrl + '/trips', val);
    }
    deletetrips(id: any) {
        return this.http.delete(this.APIUrl + '/trips/' + id);
    }

    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }

}  