import { TeamRoutingModule } from './team-routing.module';
import { TotalTeamRoutingModule } from './components/total-team/total-team-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalTeamComponent } from './components/total-team/total-team.component';
import { BasedOnExpertiesComponent } from './components/based-on-experties/based-on-experties.component';
import { HomeTotalTeamComponent } from './components/total-team/components/home-total-team/home-total-team.component';
import { HomeBasedOnExpertiesComponent } from './components/based-on-experties/components/home-based-on-experties/home-based-on-experties.component';



@NgModule({
  declarations: [
    TotalTeamComponent,
    BasedOnExpertiesComponent,
   
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
