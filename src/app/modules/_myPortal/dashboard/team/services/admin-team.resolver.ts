import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeamMember } from '../model/team-member';
import { AdminTeamService } from './admin-team.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTeamResolver implements Resolve<any> {
  constructor(private adminTeamService:AdminTeamService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      teamMembersList:this.adminTeamService.teamMembersList(),
      getDesignationList:this.adminTeamService.getDesignationList(),
      getDepartmentList:this.adminTeamService.getDepartmentList()
    }
   );
 
  }
}
