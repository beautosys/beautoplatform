import { SoftwareModule } from './../software/software.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { CoreModule } from '../../_core/core.module';



@NgModule({
 declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, CoreModule, MaterialModule, SoftwareModule],
})
export class PagesModule { }
