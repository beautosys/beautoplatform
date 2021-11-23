import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { tap } from 'rxjs/operators';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private router:Router, private headerTitleService:HeaderTitleService, private userInfoService:UserInfoService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let authReq = request;
    // let userInfo;
    // if (localStorage.getItem('userInfo') != null) {
    //   let user:any=localStorage.getItem('userInfo');
    //   userInfo=JSON.parse(user);
    // }
    // (request.url);
    // (userInfo);
    let authReq = request;
    let userInfo=this.userInfoService.getUserInfo();
    (userInfo);
    if(userInfo!=undefined){
      if (userInfo.token != null) {
        (request.url);
        if(request.url.includes('submitJobApplication') || request.url.includes('getlist') || request.url.includes('getlistdepartment') || request.url.includes('addmember') || request.url.includes('registration'))
        authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + userInfo.token).set("Access-Control-Allow-Origin","*")});
        else if(request.url.includes('signup'))
        authReq = request.clone({ headers: request.headers.set('Content-Type', 'application/json').set("Access-Control-Allow-Origin","*")});
        else  
        authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + userInfo.token).set('Content-Type', 'application/json').set("Access-Control-Allow-Origin","*")});
      }
    }
    
    return next.handle(authReq).pipe(tap(
      (res:any):any=>{
        (res);
      },
      (err: any):any => {
        if (err instanceof HttpErrorResponse) {
          
          if (err.status === 401) {
            this.headerTitleService.updatedTitle('Login');
            this.headerTitleService.updatedStart('Login');
            this.router.navigate(['/auth/login']);

          }
        }
        return new Observable<HttpEvent<any>>();
      }
      
    ));
  }
}
