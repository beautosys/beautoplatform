import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CareerService } from './career.service';

@Injectable({
  providedIn: 'root'
})
export class CareerResolver implements Resolve<any> {
  constructor(private careerService: CareerService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.careerService.listofJobDetails().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
