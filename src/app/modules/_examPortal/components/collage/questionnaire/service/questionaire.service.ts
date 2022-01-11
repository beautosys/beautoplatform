import { Injectable } from '@angular/core';
import { javascript } from 'src/app/shared/mocks/questoinnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {
  questionnarire:any;
  constructor() {
    this.questionnarire=javascript;
   }

  updateQuestion(index:number, isAttended:boolean, isSkipped:boolean, ans:string){
    
  }
}
