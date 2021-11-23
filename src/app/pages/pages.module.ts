import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { OurJourneyComponent } from './aboutus/our-journey/our-journey.component';
import { LeadershipComponent } from './aboutus/leadership/leadership.component';
import { VmvComponent } from './aboutus/vmv/vmv.component';
import { DevelopmentProcessComponent } from './_software/development-process/development-process.component';
import { SkillSAndToolsComponent } from './_software/skill-sand-tools/skill-sand-tools.component';
import { SolutionsComponent } from './_software/solutions/solutions.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OurTeamComponent } from './team/our-team/our-team.component';


import { NgImageSliderModule } from 'ng-image-slider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CareerApplicationComponent, CareerDetailsDialog, CareersComponent } from './homeCareer/careers/careers.component';
import { ClientsComponent } from './mechantronics/clients/clients.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CareerInterceptor } from './homeCareer/_service/career.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    OurJourneyComponent,
    LeadershipComponent,
    VmvComponent,
    DevelopmentProcessComponent,
    SkillSAndToolsComponent,
    SolutionsComponent,
    GallaryComponent,
    ContactUsComponent,
    OurTeamComponent,
    CareersComponent,
    ClientsComponent,
    CareerDetailsDialog,
    CareerApplicationComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    CarouselModule,
    NgbModule,
    NgImageSliderModule,
    MatCarouselModule.forRoot()
  ],
  entryComponents: [
    CareerDetailsDialog,
    CareerApplicationComponent
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CareerInterceptor,
    //   multi: true
    //  },
    
    ],
})
export class PagesModule { }
