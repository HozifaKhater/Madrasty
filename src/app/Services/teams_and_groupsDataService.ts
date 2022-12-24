import { EventEmitter, Injectable, Output } from '@angular/core';  
import { Http, Response, Headers } from '@angular/http';  
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';  
/*import { map } from 'rxjs/operators';*/
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class teams_and_groupsDataService
{
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public id: number;
    public type_id: string;
    public type_name: string;
    public name: string;
    public goals: string;

    constructor(private http: HttpClient){}
  
    //public GetAlldepartment = (): Observable<any> =>  
    //{
      
    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());
     
    //}
    GetAllteams_and_groups(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/teams_and_groups');
    }
    GetAllteams_and_groups_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/teams_and_groups/id?id=' + val);
    }
    addteams_and_groups(val: any) {
        return this.http.post(this.APIUrl + '/teams_and_groups', val);
    }
    updateteams_and_groups(val: any) {
        return this.http.put(this.APIUrl + '/teams_and_groups', val);
    }
    deleteteams_and_groups(id: any) {
        return this.http.delete(this.APIUrl + '/teams_and_groups/' + id);
    }

    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }

}  