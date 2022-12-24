import { EventEmitter, Injectable, Output } from '@angular/core';  
import { Http, Response, Headers } from '@angular/http';  
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';  
/*import { map } from 'rxjs/operators';*/
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class user_privDataService
{
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    user_id: number;
    emp_id: string;
    priv_name: string = "";
    page_name: string = "";
    in_class_priv: string = "";
    dep_work: string = "";
    job_id: string = "";

    constructor(private http: HttpClient){}
  
    //public GetAlldepartment = (): Observable<any> =>  
    //{
      
    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());
     
    //}
    GetAlluser_privs(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/emp_user_privliges');
    }
    GetAlluser_privs_with_emp_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/emp_user_privliges/emp_id?emp_id=' + val);
    }
    adduser_privs(val: any) {
        return this.http.post(this.APIUrl + '/emp_user_privliges', val);
    }
    updateuser_privs(val: any) {
        return this.http.put(this.APIUrl + '/emp_user_privliges', val);
    }
    deleteuser_privs_empinfo(id: any) {
        return this.http.delete(this.APIUrl + '/emp_user_privliges/' + id);
    }
    deleteuser_privs(id: any) {
        return this.http.delete(this.APIUrl + '/emp_user_privliges/emp_id?emp_id=' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
    }

}  