import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AddEmployeeComponent } from '../../add-employee/add-employee.component';
import { AddUpdateEmployeeComponent } from '../../add-update-employee/add-update-employee.component';
import { DeleteEmployeeComponent } from '../../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../../edit-employee/edit-employee.component';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  employees:any;
  designation = ['All', 'HR Finance', 'Jr Java Devloper', 'Frontend Devloper'];
  selectedDesignation = 'All';
  department = ['All', 'HR', 'IT', 'Mech'];
  selectedDepartment = 'All';
  location = ['All', 'Pune', 'Mumbai', 'Chennai', 'Bengleru'];
  selectedLocation = 'All';
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  selectedMonth = 'January';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  displayedColumns: string[] = ['sr_no', 'employeeNo', 'name', 'gender', 'bloodGroup', 'emailId', 'mobileNumber', 'department', 'designation', 'location', 'action'];
  dataSource: any;
  sortedData: any;
  clientName: string = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  pageLength = 100;
  pageSize = 10;

  recordLength: number = 0;

  constructor(private router: Router, private headerTitleService: HeaderTitleService, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  pageChangeEvent(event: any) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((response: any) => {

      this.employees=[];
      this.employees=response.employees.getEmployeeList;
      this.recordLength = response.employees.getEmployeeList.length;
      this.dataSource =new MatTableDataSource<any>(response.employees.getEmployeeList); 
      this.sortedData=this.dataSource;

      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
    });
    // this.recordLength = this.employees.length;
    // this.dataSource = new MatTableDataSource<any>(this.employees);
    // this.sortedData = this.dataSource;

    // this.headerTitleService.updatedTitle('Employee');
    // this.headerTitleService.updatedStart('Employee /');
  }



  openAddEmployeeDialog(data: any) {

    const careerJobDialogRef = this.dialog.open(AddUpdateEmployeeComponent, {});

    careerJobDialogRef.afterClosed().subscribe(result => {
      if (result != undefined || result != null) {
        // if(result.code!='401'){


        // }
      }
    });

  }


  openDeleteEmployeeDialog(data: any) {

    const deleteJobDialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '40vw',
      maxWidth: '40vw',
      data: data
    });

    deleteJobDialogRef.afterClosed().subscribe(result => {


    });

  }

  openUpdateEmployeeDialog(data: any) {

    const deleteJobDialogRef = this.dialog.open(EditEmployeeComponent, {
      width: '40vw',
      maxWidth: '40vw',
      data: data
    });

    deleteJobDialogRef.afterClosed().subscribe(result => {


    });
  }

  onChangeMonth(e: any) {
    this.selectedMonth = e.value;

  }

  onChangeDept(e: any) {
    this.selectedDepartment = e.value;
  }

  onChangeDes(e: any) {
    this.selectedDesignation = e.value;
  }

  onChangeLocation(e: any) {
    this.selectedLocation = e.value;
  }

  onViewClick(type: string) {
    if (type == 'list') {
      this.router.navigate(['/employeeMgnmt/employee-list-view']);
    }
  }

}
