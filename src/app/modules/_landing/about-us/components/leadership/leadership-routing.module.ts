import { HomeLeaderShipComponent } from './components/home-leader-ship/home-leader-ship.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

        path: '',
        canActivate : [],
        component: HomeLeaderShipComponent
      },
 
    
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershipRoutingModule { }
