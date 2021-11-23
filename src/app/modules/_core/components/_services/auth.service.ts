import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postSignup(data:any) {
    return this.http.post(environment.signup,data);
  }

  postLogin(data:any){
    return this.http.post(environment.login,data);

  }

  forgotPassword(body:any):Observable<any>{
    return this.http.post(environment.forgetPassword,body);
  }

  validateOTP(body:any):Observable<any>{
    return this.http.post(environment.validateOtp,body);
  }

  resetPassword(body:any):Observable<any>{
    return this.http.post(environment.resetPassword,body);
  }

  changePassword(body:any):Observable<any>{
    let userInfo;
    if (localStorage.getItem('userInfo') != null) {
      let a:any=localStorage.getItem('userInfo');
      userInfo=JSON.parse(a);
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + userInfo.accessToken
      })
    }

    return this.http.post(environment.changePassword,body,httpOptions);
  }



 
}
