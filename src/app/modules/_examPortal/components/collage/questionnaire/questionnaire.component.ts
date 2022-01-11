import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { javascript } from 'src/app/shared/mocks/questoinnaire';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { QuestionaireService } from './service/questionaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnarire:any;
  currentIndex:number=0;
  constructor( private activatedRoute:ActivatedRoute, private headerTitleService:HeaderTitleService, private questionaireService:QuestionaireService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response:any)=>{
       this.headerTitleService.updatedStart(response.start);
       this.headerTitleService.updatedTitle(response.title);
    });
    this.questionnarire=javascript;
  }

  onNext(){
    this.currentIndex++;
  }

  onPrevious(){
    this.currentIndex--;
  }

  onSkip(index:number){

    this.questionaireService.updateQuestion(index,false,true,'');
    this.currentIndex++;
  }

}
