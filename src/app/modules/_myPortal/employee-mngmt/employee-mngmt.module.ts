import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEmployeeComponent } from './componets/home-employee/home-employee.component';
import { EditEmployeeComponent } from './componets/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './componets/delete-employee/delete-employee.component';
import { EmployeeMngmtRoutingModule } from './employee-mngmt-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { CoreModule } from '../../_core/core.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { EmployeeMngmtComponent } from './employee-mngmt.component';
import { ListViewComponent } from './componets/view-employee/list-view/list-view.component';
import { GridViewComponent } from './componets/view-employee/grid-view/grid-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEmployeeComponent } from './componets/add-employee/add-employee.component';
import { WelcomeToEmployeePageComponent } from './componets/welcome-to-employee-page/welcome-to-employee-page.component';



@NgModule({
  declarations: [
    EmployeeMngmtComponent,
    HomeEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ListViewComponent,
    GridViewComponent,
    AddEmployeeComponent,
    WelcomeToEmployeePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeMngmtRoutingModule,
    CoreModule,
    ThemeModule,
    HttpClientModule,
    SharedModule
  ],
  entryComponents: [
   AddEmployeeComponent,
   EditEmployeeComponent,
   DeleteEmployeeComponent
  ],
})
export class EmployeeMngmtModule { }
