import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ContactUs } from '../model/contact-us.model';

@Injectable({
  providedIn: 'root'
})
export class AdminContactUsService {

  constructor(private http:HttpClient) { }

  getContactUsList():Observable<ContactUs[]>{
    return this.http.get<ContactUs[]>(environment.getContactUsList).pipe(
      map((response:ContactUs[])=>{
        for(let i in response){
          response[i].action=''
        }
       return response;
      })
    );
  }

  deleteContactUsMessage(id:number):Observable<any>{
    return this.http.delete<any>(environment.deleteContactUsMessage+`?id=${id}`)
  }
}
