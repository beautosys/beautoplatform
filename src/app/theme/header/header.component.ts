import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from './header-title.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/shared/auth/user-info/user-info.service';
import { User } from 'src/app/shared/auth/user-info/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string='';
  start:string='';
  isSlidMenuOpen:boolean=false
  user!:User;
  constructor( private router:Router,private userInfoService:UserInfoService,
     private headerTitleService:HeaderTitleService ) { }


  ngOnInit(): void {
    // this.user=this.userInfoService.getUserInfo();
    this.headerTitleService.userData.subscribe(
      data=>{
        this.user=data;

      }
    );
    this.headerTitleService.data.subscribe(
      data=>{
        this.title=data;
      }
    );
    this.headerTitleService.data1.subscribe(
      data=>{
        this.start=data;
      }
    );

  }

  onClose(flag:boolean){
    this.isSlidMenuOpen=flag;
  }

  onUserClick(type:string){
    
    this.headerTitleService.updatedTitle('');
    this.headerTitleService.updatedStart('');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('tokenValue')
    this.router.navigate(['/auth']);
  }

  onHome(s:string){
    if(s.includes('Home'))
    this.router.navigate(['']);
  }

  onAdmin(){
    // this.headerTitleService.updatedTitle('Team');
    // this.headerTitleService.updatedStart('Dashboard');
    this.router.navigate(['/dashboard/websAdmin']);
  }
}
