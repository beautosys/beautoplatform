import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  constructor(private http:HttpClient) { }

  getClientList():Observable<any>{
    return this.http.get(environment.clientList).pipe(
      map((response:any)=>{
        for(let i in response){
          response[i].file=BASE_URL+response[i].file.substring(2);
        }
        return response;
      })
    );
  }
}
