import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../shared/auth/user-info/user-info.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  user:any;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit(): void {

    this.user=this.userInfoService.getUserInfo()
    if(this.user.roles.length==0)
    this.userInfoService.updateUserInfo({id:'',name:'',email:'',roles:['ROLE_VISITOR'],token:''});
  }

}
