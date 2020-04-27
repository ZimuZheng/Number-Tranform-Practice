import { Injectable, OnInit } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class PhoneNumberService implements OnInit {

    constructor(private http: HttpClient){}

    ngOnInit(){

    }
    
    getResult(phonenumber: string) : Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/number/change/'+`${phonenumber}`)
        .pipe();
    }
}






