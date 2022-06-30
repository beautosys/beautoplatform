import { Component, HostBinding, OnInit } from '@angular/core';
import { animate, animateChild, group, keyframes, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: any;
  info: string;
  sizeclass: string;
}
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss'],
  // animations: [

  //   trigger('enterExitLeft', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateX(-20px)' }),
  //       animate(
  //         '300ms ease-in',
  //         style({ opacity: 1, transform: 'translateX(0)' })
  //       ),
  //     ]),
  //     transition(':leave', [
  //       animate(
  //         '300ms ease-in',
  //         style({ opacity: 0, transform: 'translateX(-20px)' })
  //       ),
  //     ]),
  //   ]),
  //   trigger('enterExitRight', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateX(20px)' }),
  //       animate(
  //         '300ms ease-in',
  //         style({ opacity: 1, transform: 'translateX(0)' })
  //       ),
  //     ]),
  //     transition(':leave', [
  //       animate(
  //         '300ms ease-in',
  //         style({ opacity: 0, transform: 'translateX(20px)' })
  //       ),
  //     ]),
  //   ]),
  //   trigger('container', [
  //     transition(':enter, :leave', [
  //       query('@*', animateChild(), { optional: true }),
  //     ]),
  //   ]),

  //   trigger('listAnimation', [
  //     transition('* => *', [

  //       query(':enter', style({ opacity: 0 }), {optional: true}),

  //       query(':enter', stagger('300ms', [
  //         animate('1s ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  //           style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //           style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
  //         ]))]), {optional: true}),

  //         query(':leave', stagger('300ms', [
  //           animate('1s ease-in', keyframes([
  //             style({opacity: 1, transform: 'translateY(0)', offset: 0}),
  //             style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
  //             style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
  //           ]))]), {optional: true})
  //     ])
  //   ])
  // ]
})

export class GallaryComponent implements OnInit {
  // items:string[];
  // uniqueItems :string[];
  // reitems:string[];

  tiles: Tile[] = [
    { text: 'image_7.png', cols: 4, rows: 4, color: 'lightblue', img: 'Three column 1', info: 'Lorem ipsum dolor sit amet!', sizeclass: '4' },
    { text: 'image_1.png', cols: 1, rows: 1, color: 'lightgreen', img: 'Three column 2', info: 'Lorem ipsum dolor sit ames!', sizeclass: '2' },
    { text: 'image_2.png', cols: 1, rows: 1, color: 'lightpink', img: 'Three column 3', info: 'Lorem ipsum dolor sit ames!', sizeclass: '3' },
    { text: '3.jpg', cols: 2, rows: 2, color: '#DDBDF1', img: 'Three column 4', info: 'Lorem ipsum dolor sit amet!', sizeclass: '4' },
    { text: 'image_6.png', cols: 2, rows: 3, color: 'lightblue', img: 'Three column 5', info: 'Lorem ipsum dolor sit amet!', sizeclass: '5' },
    { text: '4.jpg', cols: 2, rows: 2, color: 'lightgreen', img: 'Three column 6', info: 'Lorem ipsum dolor sit amet!', sizeclass: '7' },
    { text: '3.jpg', cols: 2, rows: 3, color: 'lightpink', img: 'Three column 7', info: 'Lorem ipsum dolor sit ames!', sizeclass: '8' },
    { text: '7.jpg', cols: 2, rows: 3, color: '#DDBDF1', img: 'Three column 8', info: 'Lorem ipsum dolor sit amet!', sizeclass: '9' },
    { text: '2.jpg', cols: 4, rows: 3, color: '#DDBDF1', img: 'Three column 9', info: 'Lorem ipsum dolor sit amet!', sizeclass: '10' },
  ];

  private urls: string[] = [
    'assets/img/gallary/image_1.png',
    'assets/img/gallary/image_2.png',
    'assets/img/gallary/image_3.png',
    'assets/img/gallary/image_4.png',
    'assets/img/gallary/image_5.png',
    'assets/img/gallary/image_6.png',
    'assets/img/gallary/image_7.png',
    'assets/img/gallary/image_8.png',
    'assets/img/gallary/image_9.png',
    'assets/img/gallary/image_10.png',
    'assets/img/gallary/image_11.png',
  ];

  get images(): IMasonryGalleryImage[] {
    return this.urls.map(m => <IMasonryGalleryImage>{
      imageUrl: m,
    });
  }

  constructor(private route: ActivatedRoute, private headerTitleService: HeaderTitleService) {
    //   this.items=[];
    //   this.items = ['1','4','5','2','3','4','3','1','2','1','5','2','1','1','2','3'];
    //   this.reitems=this.items;
    //   this.uniqueItems=this.items.filter((c, index) => {
    //     return this.items.indexOf(c) === index;
    // });
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    })
  }

  // filterItem(item:string) {
  //   this.items=[];
  //   for(let i=0;i<this.reitems.length;i++){
  //      if(item!=this.reitems[i]){
  //       this.items.push(this.reitems[i]);
  //      }
  //   }
  // }

}
