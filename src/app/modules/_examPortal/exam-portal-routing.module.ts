import { CollageResolver } from './components/collage/_services/resolver/collage.resolver';
import { NgModule } from '@angular/core';
import { ExamPortalComponent } from './exam-portal.component';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './components/collage/questionnaire/questionnaire.component';
import { EmployeeResolver } from '../_myPortal/employee-mngmt/services/employee.resolver';
import { CollageGridViewComponent } from './components/collage/collage-grid-view/collage-grid-view.component';
import { CollageDetailsComponent } from './components/collage/collage-details/collage-details.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';

const routes: Routes = [
  {
    path: '',
    component: ExamPortalComponent,
    children:[

      {
        path:'collageList',
        component:CollageListViewComponent,
        resolve:{ collagesList:CollageResolver},
        data: {
          title: 'College Details',
          start:'College / ',
          breadcrumb: [
            {
              label: 'College list List View',
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
        path:'add-student',
        component:AddStudentComponent,

        data: {
          title: 'Student Form',
          start:'Collage / ',
          breadcrumb: [
            {
              label: 'Student Form',
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
