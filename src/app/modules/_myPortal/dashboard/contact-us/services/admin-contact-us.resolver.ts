import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminContactUsService } from './admin-contact-us.service';

@Injectable({
  providedIn: 'root'
})
export class AdminContactUsResolver implements Resolve<any> {
  constructor(private adminContactUsService:AdminContactUsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.adminContactUsService.getContactUsList().pipe(
      catchError(error => {
        return of([]);
      })
    );
  }
}
