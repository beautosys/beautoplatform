import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPortalComponent } from '../_examPortal/exam-portal.component';
import { CollageinfoComponent } from './collageinfo.component';

const routes: Routes = [
  {
    path: '',
    component: CollageinfoComponent,
    data: {
      title: 'College Info',
      start:'collageinfo/ ',
      breadcrumb: [
        {
          label: 'College Info',
          url: ''
        }
      ]
    }
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollageinfoRoutingModule { }
