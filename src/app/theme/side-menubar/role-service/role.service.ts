import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role:string='';
  
  private roleSource = new BehaviorSubject<string>(this.role);
  roleData = this.roleSource.asObservable();

  constructor() { 
   
   let userInfo;
  
    if (localStorage.getItem('userInfo') != null) {
      let user:any=localStorage.getItem('userInfo');
      userInfo=JSON.parse(user);

    }

    if(userInfo!=undefined){
      if (userInfo.roles.length!=0) {
        this.updateRole(userInfo.roles[0]);
      }
    }
  }

  updateRole(role: string){
    this.roleSource.next(role);
  }

}
