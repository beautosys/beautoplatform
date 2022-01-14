import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamPortalRoutingModule } from './exam-portal-routing.module';
import { CollageListViewComponent } from './components/collage/collage-list-view/collage-list-view.component';
import { AddcollagesComponent } from './components/collage/addcollages/addcollages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { CoreModule } from '../_core/core.module';
import { QuestionnaireComponent } from './components/collage/questionnaire/questionnaire.component';
import { CollageGridViewComponent } from './components/collage/collage-grid-view/collage-grid-view.component';
import { CollageDetailsComponent } from './components/collage/collage-details/collage-details.component';
import { RouterModule } from '@angular/router';
import { DeleteCollageDetailsComponent } from './components/collage/delete-collage-details/delete-collage-details.component';



@NgModule({
  declarations: [
    CollageListViewComponent,
    AddcollagesComponent,
    QuestionnaireComponent,
    CollageGridViewComponent,
    CollageDetailsComponent,
    DeleteCollageDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule,
    ThemeModule,
    SharedModule,
    ExamPortalRoutingModule
  ],
})
export class ExamPortalModule { }
