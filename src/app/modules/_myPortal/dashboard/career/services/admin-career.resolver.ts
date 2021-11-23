import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { AdminCareerService } from './admin-career.service';

@Injectable({
  providedIn: 'root'
})
export class AdminCareerResolver implements Resolve<any> {
  constructor(private adminCareerService:AdminCareerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      listofJobDetails:this.adminCareerService.listofJobDetails(),
      getDesignationList:this.adminCareerService.getDesignationList(),
      getDepartmentList:this.adminCareerService.getDepartmentList()
    }
   )
  }
}
