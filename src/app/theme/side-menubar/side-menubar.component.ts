import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../header/header-title.service';

@Component({
  selector: 'app-side-menubar',
  templateUrl: './side-menubar.component.html',
  styleUrls: ['./side-menubar.component.scss']
})
export class SideMenubarComponent implements OnInit {
  role:string='';
  showCommonSideMenu:boolean=true;
  isResponsiveMenuOn:boolean=false;
  constructor(private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.headerTitleService.userData.subscribe(
      response=>{
        this.role=response.roles[0];
      }
    );
    this.headerTitleService.menuBar.subscribe(
      response=>{
 
        this.showCommonSideMenu=response;
      }
    );
  }


  changedTitle(getTitle:any){

  }

  onResponsiveMenu(){
    this.isResponsiveMenuOn=!this.isResponsiveMenuOn;
  }

}
