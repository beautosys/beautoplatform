import { HomeTotalTeamComponent } from './components/home-total-team/home-total-team.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {

        path: '',
        canActivate : [],
        component: HomeTotalTeamComponent
      },
 
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalTeamRoutingModule { }
