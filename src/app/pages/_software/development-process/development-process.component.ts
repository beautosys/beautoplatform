import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-development-process',
  templateUrl: './development-process.component.html',
  styleUrls: ['./development-process.component.scss']
})
export class DevelopmentProcessComponent implements OnInit {

  data=[
    {
      title:'Client-BA',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'BA-UX, Architect',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'BA-TechLeads',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'TL-Devs',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Testing',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Deployment',
      // subtitle:'Lorem Ipsum',
      info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione quo eveniet voluptatibus aperiam est, sapiente nostrum nisi, dolores magnam nihil fugiat culpa. Vitae ipsam magni nulla suscipit ratione dicta, accusamus, quaerat enim molestiae pariatur ad quia amet quisquam. Accusamus, eius officiis tempora possimus, exercitationem labore vitae debitis deleniti, reprehenderit beatae corrupti quo pariatur quia in accusantium laboriosam maiores minus laudantium! Quos et excepturi consequuntur magni aliquam quam temporibus dolorum praesentium voluptatum quisquam, dolores laborum rem expedita explicabo debitis. Ad culpa voluptatum in et rerum dolore cumque vero iure atque labore, sit explicabo autem dolor eaque animi perferendis nemo ullam.',
      imgUrl:'http://news.xpertxone.com/wp-content/uploads/2015/12/406153-sundar-pichai.jpg'
    },
    {
      title:'Delivery',
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
  });
  }

}
