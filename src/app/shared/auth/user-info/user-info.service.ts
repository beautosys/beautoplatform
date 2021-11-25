import { Injectable } from '@angular/core';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  user!: User;
  constructor(private headerTitleService:HeaderTitleService) { 
    let userInfo;
    if (localStorage.getItem('userInfo') != null) {
      let user:any=localStorage.getItem('userInfo');
      userInfo=JSON.parse(user);
      this.updateUserInfo(userInfo);
    }else{
      this.updateUserInfo({id:'',username:'',email:'',roles:[],token:''});
    }
  }

  updateUserInfo(userInfo:any){
   
    this.user={
      id:userInfo.id,
      name:userInfo.username,
      email:userInfo.email,
      roles:userInfo.roles[0]=='ROLE_ADMIN'?['Admin']:userInfo.roles[0]=='ROLE_CANDIDATE'?['User']:userInfo.roles[0]=='ROLE_HRMANAGER'?['HR Manager']:userInfo.roles[0]=='ROLE_VISITOR'?['Visitor']:[ ],
      token: userInfo.accessToken
    }
    this.headerTitleService.updateUser(this.user);

  }

  getUserInfo(){
    return this.user;
  }
}


