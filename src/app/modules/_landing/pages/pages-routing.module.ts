import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../_myPortal/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: '',
        redirectTo: 'myProfile',
        pathMatch: 'full',
      },

      {
        path: 'aboutUs',
        loadChildren: () =>
          import('../about-us/about-us.module').then((m) => m.AboutUsModule),
      },

      {
        path: 'TeamMgmt',
        loadChildren: () =>
          import('../team/team.module').then((m) => m.TeamModule),
      },

    ],
  },
  {
    path: 'software',
    loadChildren: () =>
      import('../software/software.module').then((s) => s.SoftwareModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
