import { CollageResolver } from './components/collage/_services/resolver/collage.resolver';
import { NgModule } from '@angular/core';
import { ExamPortalComponent } from './exam-portal.component';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeResolver } from '../_myPortal/employee-mngmt/services/employee.resolver';
import { CollageGridViewComponent } from './components/collage/collage-grid-view/collage-grid-view.component';
import { CollageDetailsComponent } from './components/collage/collage-details/collage-details.component';

const routes: Routes = [
  {
    path: '',
    component: ExamPortalComponent,
    children:[
  
      {
        path:'collageList',
        component:CollageListViewComponent,
        resolve:{ collagesListResolver:CollageResolver},
        data: {
          title: 'College Details',
          start:'examPortal / ',
          breadcrumb: [
            {
              label: 'College list',
              url: ''
            }
          ]
        }
      },
 
{
  path:'collageGrid',
  component:CollageGridViewComponent,
  resolve:{employees:EmployeeResolver},
  data:{
    title:'Collage data in grid'
  }
},
{
  path:'collage/details/:collageName',
  component:CollageDetailsComponent,
  resolve:{employees:EmployeeResolver},
  data:{
    title:'Collage data in grid'
  }
}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPortalRoutingModule { }
