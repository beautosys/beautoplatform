import { CoreModule } from './../../_core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { CareerComponent, CareerJobComponent, DeleteDialogComponent,  } from './career/career.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminCareerService } from './career/services/admin-career.service';
import { JobApplicationComponent } from './job-application/job-application.component';

import { HttpClientModule } from '@angular/common/http';
 
import { AdminAddClientsComponent, ClientDeleteDialogComponent, ClientsComponent } from './clients/clients.component';
import { AddUpdateTeamMemberComponent, TeamComponent, TeamMemberDeleteDialogComponent } from './team/team.component';
import { WelcomeToHRDashboardComponent } from './welcome-to-hrdashboard/welcome-to-hrdashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TeamComponent,
  
    CareerComponent, 
    CareerJobComponent, 
    ContactUsComponent, 
 
    JobApplicationComponent, 
    CareerJobComponent, 
    DeleteDialogComponent, 
  
    ClientsComponent,
    AdminAddClientsComponent, 
    ClientDeleteDialogComponent, 
    AddUpdateTeamMemberComponent,
    TeamMemberDeleteDialogComponent,
    WelcomeToHRDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    DashboardRoutingModule,     
    CoreModule, 
    MaterialModule,
    ThemeModule,
    HttpClientModule

  ],
  entryComponents: [
    CareerJobComponent, 
    DeleteDialogComponent, 
    AddUpdateTeamMemberComponent, 
    TeamMemberDeleteDialogComponent,
    AdminAddClientsComponent, 
    ClientDeleteDialogComponent
  ],
})
export class DashboardModule { }
