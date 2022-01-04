import { NgModule } from '@angular/core';
import { ExamPortalComponent } from './exam-portal.component';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExamPortalComponent,
    children:[
  
      {
        path:'collageList',
        component:CollageListViewComponent,
       
        data: {
          title: 'Employee',
          start:'Employee / ',
          breadcrumb: [
            {
              label: 'User Profile List View',
              url: ''
            }
          ]
        }
      },
 


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPortalRoutingModule { }
