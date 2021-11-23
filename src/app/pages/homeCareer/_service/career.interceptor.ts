import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { UserInfoService } from 'src/app/shared/auth/user-info/user-info.service';


@Injectable()
export class CareerInterceptor implements HttpInterceptor {

  constructor( private router:Router, private headerTitleService:HeaderTitleService, private userInfoService:UserInfoService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    let userInfo=this.userInfoService.getUserInfo();
    // if (localStorage.getItem('userInfo') != null) {
    //   let user:any=localStorage.getItem('userInfo');
    //   userInfo=JSON.parse(user);
    // }
    if(userInfo!=undefined){
      if (userInfo.token != null) {
        
        if(request.url.includes('submitJobApplication') || request.url.includes('addmember'))
        authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + userInfo.token).set("Access-Control-Allow-Origin","*")});
        else if(request.url.includes('signup'))
        authReq = request.clone({ headers: request.headers.set('Content-Type', 'application/json')});
        else  
        authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + userInfo.token).set('Content-Type', 'application/json')});
      }
    }

    return next.handle(authReq).pipe(tap(
      (res:any)=>{
        // (res);
        
      },
      (err: any):any => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.headerTitleService.updatedTitle('');
            this.headerTitleService.updatedStart('');
            this.router.navigate(['/auth/login']);

          }
        }
        return new Observable<HttpEvent<any>>();
      }
      
    ));
  }
}
