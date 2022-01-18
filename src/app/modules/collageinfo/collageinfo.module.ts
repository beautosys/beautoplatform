import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollageinfoRoutingModule } from './collageinfo-routing.module';
import { CollageinfoComponent } from './collageinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { CoreModule } from '../_core/core.module';
import { ExamPortalRoutingModule } from '../_examPortal/exam-portal-routing.module';


@NgModule({
  declarations: [
    CollageinfoComponent
  ],
  imports: [
    CommonModule,
    CollageinfoRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ThemeModule,
    HttpClientModule,
    SharedModule,
    ExamPortalRoutingModule
  ]
})
export class CollageinfoModule { }
