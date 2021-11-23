import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  viewMode = 'tab1';
  currentTab: any = "tab1";
  tabTrue:boolean = true
  selectedTabData: any;
  contents = [
    {
      id:'tab1',
      name:'Pramod Palla',
      role:'CEO & Founder',
      img:'1.jpg'
    },
    {
      id:'tab2',
      name:'Saswat Kumar Sahu',
      role:'Turning ideas into products',
      img:'2.jpg'
    },
 
 ]
  constructor(private route: ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.viewMode = 'tab';
    this.SelectedTab(this.contents[0]);
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this.currentTab = fragment;

      }
    });

    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
  }
  SelectedTab(tabSelected:any){
    this.selectedTabData = tabSelected

(this.currentTab)
  }
}
