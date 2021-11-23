
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { SkillToolsService } from './_service/skill-tools.service';

@Component({
  selector: 'app-skill-sand-tools',
  templateUrl: './skill-sand-tools.component.html',
  styleUrls: ['./skill-sand-tools.component.scss'],

})
export class SkillSAndToolsComponent implements OnInit {

 data:any = []

  constructor(private route: ActivatedRoute, private headerTitleService:HeaderTitleService, private skill_toolServices: SkillToolsService) { }

  ngOnInit(): void {
    this.data = this.skill_toolServices.data

    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  });
  }

}
