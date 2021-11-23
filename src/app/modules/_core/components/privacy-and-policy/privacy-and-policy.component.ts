import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-privacy-and-policy',
  templateUrl: './privacy-and-policy.component.html',
  styleUrls: ['./privacy-and-policy.component.scss']
})
export class PrivacyAndPolicyComponent implements OnInit {

  constructor(private route:ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
  }

}
