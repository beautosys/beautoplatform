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
  // isCommonMenuOpen:boolean=true;
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
    // this.headerTitleService.menuBar.subscribe(
    //   data=>{
    //     this.isCommonMenuOpen=data;
    //   }
    // );
  }

  // onClose(flag:boolean){
  //   this.isSlidMenuOpen=flag;
  // }

  onUserClick(type:string){
    
    this.headerTitleService.updatedTitle('');
    this.headerTitleService.updatedStart('');
    this.headerTitleService.updateMenuBar(true);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('tokenValue')
    this.router.navigate(['/auth']);
  }

  onHome(s:string){
    if(s.includes('Home'))
    this.router.navigate(['']);
  }

  onTopMenu(type:string){

    
    if(type=='Admin'){
      this.headerTitleService.updateMenuBar(false);
      this.router.navigate(['/dashboard/career']);
    }else if(type=='HR Manager'){
      this.headerTitleService.updateMenuBar(false);
      this.router.navigate(['/employeeMgnmt/employee-list-view']);
    }else{
      this.headerTitleService.updateMenuBar(true);
      this.router.navigate(['/dashboard/websAdmin']);
    }
  }

  onLogo(){
    this.headerTitleService.updateMenuBar(true);
  }
}
