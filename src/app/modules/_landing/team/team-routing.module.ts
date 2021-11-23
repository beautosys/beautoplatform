import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'team', pathMatch: 'full' },

  {
    path: 'team',
    loadChildren: () =>
      import('./components/total-team/total-team.module').then(
        (m) => m.TotalTeamModule
      ),
      },
  {
    path: 'basedOnExperties',
    loadChildren: () =>
      import('./components/based-on-experties/based-on-experties.module').then(
        (m) => m.BasedOnExpertiesModule
      ),
  },
  
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule { }
