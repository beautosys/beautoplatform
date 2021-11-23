import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CareerComponent } from './career/career.component';
import { AdminCareerResolver } from './career/services/admin-career.resolver';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminContactUsResolver } from './contact-us/services/admin-contact-us.resolver';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobApplicationResolver } from './job-application/services/job-application.resolver';
import { RoleGuard } from 'src/app/shared/auth/gaurds/role.guard';
import { HomeEmployeeComponent } from '../employee-mngmt/componets/home-employee/home-employee.component';
import { AdminClientsResolver } from './clients/services/admin-clients.resolver';
import { AdminTeamResolver } from './team/services/admin-team.resolver';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { WelcomeToHRDashboardComponent } from './welcome-to-hrdashboard/welcome-to-hrdashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [

      {
        path: 'career',
        component: CareerComponent,
        resolve: { careers: AdminCareerResolver },
        data: {
          title: 'Career',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Career',
              url: ''
            }
          ]
        }
      },

      {
        path: 'job-application',
        component: JobApplicationComponent,
        resolve: { applications: JobApplicationResolver },
        data: {
          title: 'Job Application',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Job Application',
              url: ''
            }
          ]
        }
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        resolve: { messages: AdminContactUsResolver },
        data: {
          title: 'Contact Us',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Contact Us',
              url: ''
            }
          ]
        }
      },

      {
        path: 'team',
        component: TeamComponent,
        resolve: { adminteam: AdminTeamResolver },
        data: {
          title: 'Team',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Team',
              url: ''
            }
          ]
        },
      },

      {
        path: 'clients',
        component: ClientsComponent,
        resolve: { clients: AdminClientsResolver },
        data: {
          title: 'Clients',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Clients',
              url: ''
            }
          ]
        },

      },
      {
        path: 'welcomeToHRDashboard',
        component: WelcomeToHRDashboardComponent,
        resolve: { clients: AdminClientsResolver },
        data: {
          title: 'Clients',
          start: 'Dashboard / ',
          breadcrumb: [
            {
              label: 'Clients',
              url: ''
            }
          ]
        },

      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

