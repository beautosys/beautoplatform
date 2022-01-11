import { NgModule } from '@angular/core';
import { ExamPortalComponent } from './exam-portal.component';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './components/collage/questionnaire/questionnaire.component';

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
 


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamPortalRoutingModule { }
