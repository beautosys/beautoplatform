import { DashboardModule } from './modules/_myPortal/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './modules/_core/components/_services/auth.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { EmployeeMngmtComponent } from './modules/_myPortal/employee-mngmt/employee-mngmt.component';
import { EmployeeMngmtModule } from './modules/_myPortal/employee-mngmt/employee-mngmt.module';
import { AuthInterceptor } from './shared/auth/interceptors/auth.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    EmployeeMngmtModule,
    PagesModule,
    SharedModule,
    ThemeModule,
    HttpClientModule,
    CarouselModule,
    NgbModule,
    NgImageSliderModule,
   
    MatCarouselModule.forRoot()

  ],
  providers: [AuthService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
