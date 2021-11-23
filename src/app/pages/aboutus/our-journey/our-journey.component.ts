import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-our-journey',
  templateUrl: './our-journey.component.html',
  styleUrls: ['./our-journey.component.scss']
})
export class OurJourneyComponent implements OnInit {
  firstToggle: boolean = true;
  secondToggle: boolean = false;
  thirdToggle: boolean = false;
  fourthToggle: boolean = false;
  fifthToggle: boolean = false;
  constructor(private route: ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })

  }

  onMore(type: number) {
    switch (type) {
      case 1: this.firstToggle = true;
        this.secondToggle = false;
        this.thirdToggle = false;
        this.fourthToggle = false;
        this.fifthToggle = false;
        break;
      case 2: this.firstToggle = false;
        this.secondToggle = true;
        this.thirdToggle = false;
        this.fourthToggle = false;
        this.fifthToggle = false;
        break;
      case 3: this.firstToggle = false;
        this.secondToggle = false;
        this.thirdToggle = true;
        this.fourthToggle = false;
        this.fifthToggle = false;
        break;
      case 4: this.firstToggle = false;
        this.secondToggle = false;
        this.thirdToggle = false;
        this.fourthToggle = true;
        this.fifthToggle = false;
        break;
      case 5: this.firstToggle = false;
        this.secondToggle = false;
        this.thirdToggle = false;
        this.fourthToggle = false;
        this.fifthToggle = true;
        break;
      default: this.firstToggle = true;
        this.secondToggle = false;
        this.thirdToggle = false;
        this.fourthToggle = false;
        this.fifthToggle = false;
        break;
    }

  }


}
