import { NgModule } from '@angular/core';
import { ExamPortalComponent } from './exam-portal.component';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './components/collage/questionnaire/questionnaire.component';
import { EmployeeResolver } from '../_myPortal/employee-mngmt/services/employee.resolver';
import { CollageGridViewComponent } from './components/collage/collage-grid-view/collage-grid-view.component';

const routes: Routes = [
  {
    path: '',
    component: ExamPortalComponent,
    children:[

      {
        path:'collageList',
        component:CollageListViewComponent,
        resolve:{ employees:EmployeeResolver},
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
        path:'questionnaire',
        component:QuestionnaireComponent,

        data: {
          title: 'Questionnaire',
          start:'Collage / ',
          breadcrumb: [
            {
              label: 'Questionnaire',
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
}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPortalRoutingModule { }
