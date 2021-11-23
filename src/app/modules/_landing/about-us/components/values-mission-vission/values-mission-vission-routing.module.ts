import { HomeValuesMissionVissionComponent } from './components/home-values-mission-vission/home-values-mission-vission.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {

        path: '',
        canActivate : [],
        component: HomeValuesMissionVissionComponent
      },
 
    
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuesMissionVissionRoutingModule { }
