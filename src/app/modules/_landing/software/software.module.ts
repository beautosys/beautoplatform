import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentProcessComponent } from './components/development-process/development-process.component';
import { SkillsAndToolsComponent } from './components/skills-and-tools/skills-and-tools.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwareComponent } from './software.component';
import { ThemeModule } from 'src/app/theme/theme.module';



@NgModule({
  declarations: [
    DevelopmentProcessComponent,
    SkillsAndToolsComponent,
    SolutionsComponent,
    SoftwareComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    SoftwareRoutingModule
  ]
})
export class SoftwareModule { }
