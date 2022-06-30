import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

export interface Tile {
  gridysize: number;
  gridyhesize: number;
  img: any;
  title: string;

}

@Component({
  selector: 'app-teamgallary',
  templateUrl: './teamgallary.component.html',
  styleUrls: ['./teamgallary.component.scss']
})
export class TeamgallaryComponent implements OnInit {



  constructor(private route: ActivatedRoute, private headerTitleService: HeaderTitleService) { }


  tiles: Tile[] = [
    { img: '10.JPG', gridysize: 2, gridyhesize: 1, title: 'Three column 1' },
    { img: '2.jpg', gridysize: 1, gridyhesize: 1, title: 'Three column 2' },
    { img: '3.jpeg', gridysize: 1, gridyhesize: 2, title: 'Three column 3' },
    { img: '5.JPG', gridysize: 1, gridyhesize: 1, title: 'Three column 5' },
    { img: '12.JPG', gridysize: 1, gridyhesize: 1, title: 'Three column 4' },
    { img: '9.jpeg', gridysize: 1, gridyhesize: 1, title: 'Three column 5' },

    { img: '6.jpeg', gridysize: 1, gridyhesize: 1, title: 'Three column 6' },
    { img: '7.JPEG', gridysize: 1, gridyhesize: 2, title: 'Three column 4' },
    { img: '4.jpeg', gridysize: 2, gridyhesize: 2, title: 'Three column 4' },
    { img: '11.JPG', gridysize: 3, gridyhesize: 2, title: 'Three column 11' },



  ];


  ngOnInit(): void {
    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    })
  }

}
