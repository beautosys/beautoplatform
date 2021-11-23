import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-vmv',
  templateUrl: './vmv.component.html',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./vmv.component.scss']
})
export class VmvComponent implements OnInit {
  popOverFor!: string;
  placement!: string;
  @ViewChild('popOver')
  public popover!: NgbPopover;
  myStyles:any;

  constructor(private route: ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  data:any = [
  {
    img:'mission-1.svg',
    info:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloree magna aliqua. Ut enim ad minim veniam, quis nostrudt exercitation ullamco laboris nisi ut aliquip ex ea commj odo. consequat ullamco laboris nisi ut. ex ea commn.',
    title:'Mission',
    icon:'Vision-icon-1.svg'
  },
  {
    img:'Vision-1.svg',
    info:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloree magna aliqua. Ut enim ad minim veniam, quis nostrudt exercitation ullamco laboris nisi ut aliquip ex ea commj odo. consequat ullamco laboris nisi ut. ex ea commn.',
    title:'Vision',
    icon:'Mission-icon-1.svg'
  },
  {
    img:'value-1.svg',
    info:'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloree magna aliqua. Ut enim ad minim veniam, quis nostrudt exercitation ullamco laboris nisi ut aliquip ex ea commj odo. consequat ullamco laboris nisi ut. ex ea commn.',
    title:'Values',
    icon:'Value-icon-1.svg'
    
  }]

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
  }



}
