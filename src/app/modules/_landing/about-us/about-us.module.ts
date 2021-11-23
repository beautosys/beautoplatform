import { AboutUsRoutingModule } from './about-us-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { OurJourneyComponent } from './components/our-journey/our-journey.component';
import { ValuesMissionVissionComponent } from './components/values-mission-vission/values-mission-vission.component';


@NgModule({
  declarations: [
    LeadershipComponent,
    OurJourneyComponent,
    ValuesMissionVissionComponent,
   
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
