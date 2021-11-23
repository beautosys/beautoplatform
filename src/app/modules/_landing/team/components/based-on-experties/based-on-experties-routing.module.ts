import { HomeBasedOnExpertiesComponent } from './components/home-based-on-experties/home-based-on-experties.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {

        path: '',
        canActivate : [],
        component: HomeBasedOnExpertiesComponent
      },
 
    
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBasedOnExpertiesRoutingModule { }
