import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEmployeeComponent } from './componets/home-employee/home-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeMngmtComponent } from './employee-mngmt.component';
import { ListViewComponent } from './componets/view-employee/list-view/list-view.component';
import { AddEmployeeComponent } from './componets/add-employee/add-employee.component';
import { EditEmployeeComponent } from './componets/edit-employee/edit-employee.component';
import { WelcomeToEmployeePageComponent } from './componets/welcome-to-employee-page/welcome-to-employee-page.component';
import { GridViewComponent } from './componets/view-employee/grid-view/grid-view.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeMngmtComponent,
    children:[
      // {
      //    path:'',
      //    redirectTo:'employee-list-view',
      //    pathMatch:'full'
      // },
      {
        path:'employee-list-view',
        component:ListViewComponent,

        data: {
          title: 'Employee',
          start:'Employee / ',
          breadcrumb: [
            {
              label: 'User Profile List View',
              url: ''
            }
          ]
        }
      },
      {
        path:'employee',
        component:WelcomeToEmployeePageComponent,

        data: {
          title: 'Employee',
          start:'Employee / ',
          breadcrumb: [
            {
              label: 'User Profile Grid View',
              url: ''
            }
          ]
        }
      },
      
      // {
      //   path:'employee',
      //   component:ListViewComponent,

      //   data: {
      //     title: 'Employee',
      //     start:'Employee / ',
      //     breadcrumb: [
      //       {
      //         label: 'Employee',
      //         url: ''
      //       }
      //     ]
      //   }
      // },
      {
        path:'addEmployee',
        component:AddEmployeeComponent,
        data: {
          title: 'Add Employee',
          start:'addEmployee / ',
          breadcrumb: [
            {
              label: 'Employee',
              url: ''
            }
          ]
        }
      },
      {
        path:'editEmployee',
        component:EditEmployeeComponent,
        data: {
          title: 'Add Employee',
          start:'addEmployee / ',
          breadcrumb: [
            {
              label: 'Employee',
              url: ''
            }
          ]
        }
      },
      {
        path:'welcomeToEmployee',
        component:WelcomeToEmployeePageComponent,
        data: {
          title: 'Add Employee',
          start:'addEmployee / ',
          breadcrumb: [
            {
              label: 'Employee',
              url: ''
            }
          ]
        }
      }


    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeMngmtRoutingModule { }
