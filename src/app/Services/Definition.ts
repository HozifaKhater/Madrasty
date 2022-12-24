import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class DefinitionDataService{
    readonly APIUrl = "https://localhost:44337/api";
    private actionUrl: string;
    public def_id: number;
    public def_name: string;
    public s_code: string;
    public s_code_arabic: string;

    constructor(private http: HttpClient) { }

    GetDefinitions(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/defination');
    }

    GetSCodes(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/defination/sCodeArabic');
    }

    GetDefinitionWithId(val: any): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/defination/id?id=' + val);
    }

    addDefinition(val: any) {
        return this.http.post(this.APIUrl + '/defination', val);
    }

    updateDefinition(val: any) {
        return this.http.put(this.APIUrl + '/defination', val);
    }

    deleteDefinition(id: any) {
        return this.http.delete(this.APIUrl + '/defination/' + id);
    }

    @Output() aClickedEvent = new EventEmitter<string>();

    AClicked(msg: string) {
        this.aClickedEvent.emit(msg);
        console.log(DefinitionDataService);
    }

    

}

