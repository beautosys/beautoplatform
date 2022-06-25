import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { ViewmoreComponent } from '../viewmore/viewmore.component';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  viewMode = 'tab1';
  currentTab: any = "tab1";
  tabTrue: boolean = true;
  selectedTabData: any;
  contents = [
    {
      id: 'tab1',
      name: 'Pramod Palla',
      role: 'CEO & Founder',
      img: '1.jpg',
    },
    {
      id: 'tab2',
      name: 'Saswat Kumar Sahu',
      role: 'Turning ideas into products',
      img: '2.jpg'
    },

  ];
  constructor(private route: ActivatedRoute, private headerTitleService: HeaderTitleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.viewMode = 'tab';
    this.SelectedTab(this.contents[0]);
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this.currentTab = fragment;

      }
    });

    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    });
  }

  // tslint:disable-next-line:typedef
  SelectedTab(tabSelected: any) {
    this.selectedTabData = tabSelected;
  }

  openView(): void {
    const dialogRef = this.dialog.open(ViewmoreComponent, {
      width: '70%',
      data: { name: this.selectedTabData.name, img: this.selectedTabData.img, role: this.selectedTabData.role, }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      //  this.animal = result;
    });
  }



}
