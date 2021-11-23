import { OurJourneyComponent } from './components/our-journey/our-journey.component';
import { AboutUsComponent } from './about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'OurJourney', pathMatch: 'full' },

 
  {
    path: 'OurJourney',
   component:OurJourneyComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule { }
