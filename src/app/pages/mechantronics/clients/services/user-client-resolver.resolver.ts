import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserClientService } from './user-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserClientResolverResolver implements Resolve<any> {
  constructor(private userClientService:UserClientService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userClientService.getClientList().pipe(
      catchError(error => {
        return of([]);
      })
    );;
  }
}
