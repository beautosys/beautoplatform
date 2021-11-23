import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenubarComponent } from './side-menubar/side-menubar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { MatMenuModule } from '@angular/material/menu';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenubarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgDynamicBreadcrumbModule,
    MaterialModule
  ], 
  exports :[
    HeaderComponent,
    SideMenubarComponent,
    FooterComponent
  ]
})
export class ThemeModule { }
