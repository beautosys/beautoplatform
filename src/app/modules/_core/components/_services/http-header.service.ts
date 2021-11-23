import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderService {
  headerToken: any;

  constructor() { }
  httpOptions: any;
 
  getCommonHttpHeaders() {
   
    let userInfo;
   this.headerToken = localStorage.getItem('tokenValue')

    if (localStorage.getItem('userInfo') != null) {
      let a:any=localStorage.getItem('userInfo');
      userInfo=JSON.parse(a);

    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer'+ this.headerToken
      })
    }
    return httpOptions
  }





}
