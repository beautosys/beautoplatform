import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolver implements Resolve<boolean> {
  constructor(private employeeService:EmployeeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return this.employeeService.getEmployeeList().pipe(
    //   catchError(error => {
    //     return of([]);
    //   })
    // );
    return forkJoin({
      getEmployeeList:this.employeeService.getEmployeeList(),
      // getDesignationList:this.employeeService.getDesignationList(),
      // getDepartmentList:this.employeeService.getDepartmentList()
    }
   )
  }
}
