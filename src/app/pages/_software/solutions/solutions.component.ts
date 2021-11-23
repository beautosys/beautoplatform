import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {
  firstToggle: boolean = true;
  secondToggle: boolean = false;
  thirdToggle: boolean = false;
  fourthToggle: boolean = false;
  fifthToggle: boolean = false;

  data=[
    {
      title:'Product Dev',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Mobile & Web Dev',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Design(UX & Visual)',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Data Analytics',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'AR/VR',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'IT Staffing',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
  ];
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
