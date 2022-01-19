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
  questionnarire:any[]=[];
  currentIndex:number=0;
  selected!: string;
  selectedAns!:string;

  isOptionSelected:boolean=false;
  isPrevEnabled:boolean=false;
  isNextEnabled:boolean=true;

  // sec: number = 60;
  // min:number=59;
  interval:any;
   min: any;
   sec:any;
  constructor( private activatedRoute:ActivatedRoute, private headerTitleService:HeaderTitleService, private questionaireService:QuestionaireService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response:any)=>{
       this.headerTitleService.updatedStart(response.start);
       this.headerTitleService.updatedTitle(response.title);
    });
    this.questionnarire=javascript;
    // this.timer(3600000000);
    // this.countdownTimeStart();
    // this.startTimer();
    this.countdown(59,60)
  }

  onNext(){
    if(this.isOptionSelected){
      this.questionnarire=this.questionaireService.updateQuestion(this.currentIndex,true,false,this.selectedAns);
      this.isOptionSelected=false;
      this.selectedAns='';
    }
    if(this.questionnarire.length-2==this.currentIndex){
      this.isNextEnabled=false;
    }else{
      this.isNextEnabled=true;
      this.isPrevEnabled=true;
    }   
    this.currentIndex++;
    // this.questionnarire=javascript;
  }

  onPrevious(){
    this.currentIndex--;
    if(this.currentIndex==0){
      this.isPrevEnabled=false;
    }else{
      this.isPrevEnabled=true;
    }
  }

  onSkip(index:number){
    if(this.questionnarire.length-1==this.currentIndex){
      this.questionnarire=this.questionaireService.updateQuestion(index,false,true,'');
      this.currentIndex=index;
    }else{
      this.questionnarire=this.questionaireService.updateQuestion(index,false,true,'');
      this.currentIndex++;
    }
    if(this.questionnarire.length-2==this.currentIndex){
      this.isNextEnabled=false;
    }else{
      this.isNextEnabled=true;
      this.isPrevEnabled=true;
    } 
  }
  onAnswer(e:any){
    this.selectedAns=e.value;
    this.isOptionSelected=true;
  }

  // startTimer() {
  //   this.interval = setInterval(() => {
  //     if(this.sec > 0) {
  //       this.sec=this.sec-1;
        
  //     } else {
  //       this.sec = 59;
  //       this.min-=1;
        
  //     }
      
  //   },1000)
    
  //   console.log(this.min+' '+this.sec)
  // }

  countdown(mm:any,ss:any){
        this.interval = setInterval(()=>{
               
            if( mm == 0 && ss == 0)clearInterval(this.interval);
            ss--;
            if(ss == 0)
            {
              
                ss = 60;
                mm--;
                
            }
            this.min=mm;
            this.sec=ss;

            
            if(mm.toString().length < 2) this.min= "0"+mm;
            if(ss.toString().length < 2) this.sec = "0"+ss;
            if(ss==60) this.sec="00";
            console.log(this.min+" : "+this.sec);

        },1000)
      }

  pauseTimer() {
    clearInterval(this.interval);
  }


}
