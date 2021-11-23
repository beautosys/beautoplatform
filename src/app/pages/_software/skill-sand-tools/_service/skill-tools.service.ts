import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillToolsService {

  data=[
    {
      title:'Frontend',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
    {
      title:'Backend',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
    {
      title:'Databases',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
    {
      title:'Testing',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
    {
      title:'Could & DevOps',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
    {
      title:'Architecture',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing. ',
      imgUrl:'assets/img/skills&tools/frontEnd.svg'
    },
  ];
  constructor() { }


  getData(){
    return  this.data
  }
}
