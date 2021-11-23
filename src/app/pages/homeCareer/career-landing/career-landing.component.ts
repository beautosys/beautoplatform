import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-career-landing',
  templateUrl: './career-landing.component.html',
  styleUrls: ['./career-landing.component.scss']
})
export class CareerLandingComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
  }

  onExplore(){
    this.router.navigate(['/pages/job-detail']);
  }

}
