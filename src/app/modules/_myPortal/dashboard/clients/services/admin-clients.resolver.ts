import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminClientsService } from './admin-clients.service';

@Injectable({
  providedIn: 'root'
})
export class AdminClientsResolver implements Resolve<boolean> {
  constructor(private adminClientsService:AdminClientsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.adminClientsService.clientsList().pipe(
      catchError(error => {
        return of([]);
      })
    );
  }
}
