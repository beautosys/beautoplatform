import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLeaderShipComponent } from './components/add-leader-ship/add-leader-ship.component';
import { LeadershipRoutingModule } from './leadership-routing.module';



@NgModule({
  declarations: [
    AddLeaderShipComponent
  ],
  imports: [
    CommonModule,
    LeadershipRoutingModule
  ]
})
export class LeadershipModule { }
