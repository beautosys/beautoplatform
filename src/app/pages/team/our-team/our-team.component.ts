import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})

export class OurTeamComponent implements OnInit {
  isImageShow: boolean = true;
  currentIndex: any;
  @ViewChild('nav')
  slider!: NgImageSliderComponent;
  newImageObject: Array<any> = [];
  imageObject: any;

  //   imageObject = [


  // {
  //   id:1,
  //   src:'assets/img/leaders/half1.svg',
  //   alt:'Image_1',
  //   title:'Image_1',
  //   name:"Ravi",
  //   des:"UI"

  // },
  // {
  //   id:2,
  //   src:'assets/img/leaders/pngwing.svg',
  //   alt:'Image_2',
  //   name:"Ravi",
  //   des:"UI"
  // },
  // {
  //   id:3,
  //   src:'assets/img/leaders/half1.svg',
  //   alt:'Image_3',
  //   name:"Ravi",
  //   des:"UI"
  // },
  // {
  //   id:1,
  //   src:'assets/img/leaders/half1.svg',
  //   alt:'Image_1',
  //   title:'Image_1',
  //   name:"Ravi",
  //   des:"UI"

  // },
  // {
  //   id:2,
  //   src:'assets/img/leaders/pngwing.svg',
  //   alt:'Image_2',
  //   name:"Ravi",
  //   des:"UI"
  // },
  // {
  //   id:3,
  //   src:'assets/img/leaders/half1.svg',
  //   alt:'Image_3',
  //   name:"Ravi",
  //   des:"UI"
  // },



  // ];

  containtObject: Array<any> = [{
    title: 'title of image',
  }, {
    title: 'title of image',
  }, {
    title: 'title of image',
  }, {
    title: 'title of image',
  }, {
    title: 'title of image',
  }, {
    title: 'title of image',
  }, {
    title: 'title of image',
  }];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      768: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor(private route: ActivatedRoute, private headerTitleService: HeaderTitleService, public teamService: TeamService) { }

  ngOnInit(): void {
    this.FetchAllTeamProfile();
    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    })
  }
  prevImageClick() {
    this.slider.prev();
  }
  nextImageClick() {
    this.slider.next();

  }
  FetchAllTeamProfile() {
    ;
    this.teamService.getTeamMembers().subscribe((responce: any) => {
      this.imageObject = responce;
      // for(let i=0;i<=this.imageObject.length-1;i++){
      //   this.imageObject[i].profileImgUrl = JSON.parse(this.imageObject[i].profileImgUrl);
      // }

    })

  }





}
