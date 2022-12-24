import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
/*import 'rxjs/add/operator/map'  */
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ClassesDataService {
    readonly APIUrl = "https://madrastyapi.azurewebsites.net/api";
    private actionUrl: string;
    public class_id : number;
    public class_mr7la: string;
    public class_level: string;
    public class_corr: string;
    public class_name: string;
 

    constructor(private http: HttpClient) { }

    //public GetAlldepartment = (): Observable<any> =>  
    //{

    //    return this.http1.get(this.actionUrl).map((response: Response) => <any>response.json());

    //}
    GetAllClasses(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/class');
    }
    GetAllClasses_with_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/class/id?id=' + val);
    }
    GetAllClasses_with_level_id(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/class/class_level?class_level=' + val);
    }
    addClasses(val: any) {
        console.log("ttt")
        return this.http.post(this.APIUrl + '/class', val);
    }
    updateClasses(val: any) {
        return this.http.put(this.APIUrl + '/class', val);
    }
    deleteClasses(id: any) {
        return this.http.delete(this.APIUrl + '/class/' + id);
    }
    @Output() aClickedEvent = new EventEmitter<string>();
    /*   @Output() deparmentClickedEvent = new EventEmitter<string>();*/
    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(ClassesDataService);
    }
}