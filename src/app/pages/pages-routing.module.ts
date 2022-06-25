
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadershipComponent } from './aboutus/leadership/leadership.component';
import { OurJourneyComponent } from './aboutus/our-journey/our-journey.component';
import { OurUnitsComponent } from './aboutus/our-units/our-units.component';
import { VmvComponent } from './aboutus/vmv/vmv.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { CareerLandingComponent } from './homeCareer/career-landing/career-landing.component';
import { CareersComponent } from './homeCareer/careers/careers.component';
import { CareerResolver } from './homeCareer/_service/career.resolver';
import { ClientsComponent } from './mechantronics/clients/clients.component';
import { UserClientResolverResolver } from './mechantronics/clients/services/user-client-resolver.resolver';
import { PagesComponent } from './pages.component';
import { OurTeamComponent } from './team/our-team/our-team.component';
import { DevelopmentProcessComponent } from './_software/development-process/development-process.component';
import { SkillSAndToolsComponent } from './_software/skill-sand-tools/skill-sand-tools.component';
import { SolutionsComponent } from './_software/solutions/solutions.component';

const routes: Routes = [


  {
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home',
          start: '',
          breadcrumb: [
            {
              label: 'Home',
              url: ''
            }
          ]
        },
      },
      {
        path: 'our-journey',
        component: OurJourneyComponent,
        data: {
          title: 'Our Journey',
          start: 'About / ',
          breadcrumb: [
            {
              label: 'Our-Journey',
              url: ''
            }
          ]
        }

      },
      {
        path: 'leadership',
        component: LeadershipComponent,
        data: {
          title: 'Leadership',
          start: 'About / ',
          breadcrumb: [
            {
              label: 'Leadership',
              url: ''
            }
          ]
        }
      },
      {
        path: 'mission-vision-value',
        component: VmvComponent,
        data: {
          title: 'Mission Vision Value',
          start: 'About / ',
          breadcrumb: [
            {
              label: 'Mission-Vision-Value',
              url: ''
            }
          ]
        }
      },
      {
        path: 'ourunits',
        component: OurUnitsComponent,
        data: {
          title: 'Our Units',
          start: 'About / ',
          breadcrumb: [
            {
              label: 'Our Units',
              url: ''
            }
          ]
        }
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        data: {
          title: 'Solutions',
          start: 'Software / ',
          breadcrumb: [
            {
              label: 'Solutions',
              url: ''
            }
          ]
        }
      },
      {
        path: 'development-process',
        component: DevelopmentProcessComponent,
        data: {
          title: 'Development Process',
          start: 'Software / ',
          breadcrumb: [
            {
              label: 'Development-Process',
              url: ''
            }
          ]
        }
      },
      {
        path: 'skills-and-tools',
        component: SkillSAndToolsComponent,
        data: {
          title: 'Skills and Tools',
          start: 'Software / ',
          breadcrumb: [
            {
              label: 'Skills-and-Tools',
              url: ''
            }
          ]
        }
      },
      {
        path: 'gallary',
        component: GallaryComponent,
        data: {
          title: 'Gallary',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Gallary',
              url: ''
            }
          ]
        }
      },
      {
        path: 'our-team',
        component: OurTeamComponent,
        data: {
          title: 'Team',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Our-team',
              url: ''
            }
          ]
        }
      },
      {
        path: 'careers',
        component: CareerLandingComponent,
        data: {
          title: 'Careers',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Careers',
              url: ''
            }
          ]
        }
      },
      {
        path: 'job-detail',
        component: CareersComponent,
        resolve: { careers: CareerResolver },
        data: {
          title: 'Careers',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Careers',
              url: ''
            }
          ]
        }
      },
      {
        path: 'clients',
        component: ClientsComponent,
        resolve: { clientList: UserClientResolverResolver },
        data: {
          title: 'Clients',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Clients',
              url: ''
            }
          ]
        }
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        data: {
          title: 'Contact Us',
          start: 'Home / ',
          breadcrumb: [
            {
              label: 'Contact Us',
              url: ''
            }
          ]
        }
      },
    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
