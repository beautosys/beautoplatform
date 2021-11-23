import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobApplicationService } from './job-application.service';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationResolver implements Resolve<any> {
  constructor(private jobApplicationService:JobApplicationService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.jobApplicationService.getJobApplicationList().pipe(
      catchError(error => {
        return of([]);
      })
    );
    
  }
}
