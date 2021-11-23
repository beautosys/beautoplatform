import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopmentProcessComponent } from './components/development-process/development-process.component';
import { SkillsAndToolsComponent } from './components/skills-and-tools/skills-and-tools.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { SoftwareComponent } from './software.component';

const routes: Routes = [
   { path:'', component:SoftwareComponent, children:[
     {
       path: 'development-process',component:DevelopmentProcessComponent
   
     },
     {
       path: 'skills-and-tools',component:SkillsAndToolsComponent
     },
     {
       path: 'solutions', component:SolutionsComponent
     },

   ]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareRoutingModule { }
