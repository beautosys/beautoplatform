import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AddUpdateEmployeeComponent } from '../../add-update-employee/add-update-employee.component';
import { DeleteEmployeeComponent } from '../../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../../edit-employee/edit-employee.component';




@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  designation = ['All', 'HR Finance', 'Jr Java Devloper', 'Frontend Devloper'];
  selectedDesignation = 'All';
  department = ['All', 'HR Department', 'IT', 'Mech'];
  symbol: any=null;
  name: any=null;
  selectedDepartment = 'All';
  location = ['All', 'Pune', 'Mumbai', 'Chennai', 'Bengleru'];
  selectedLocation = 'All';
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  selectedMonth = 'January';
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  displayedCounmForDropDown: string[] = [
    'sr_no',
    'employeeId',
    'name',
    'gender',
    'bloodGroup',
    'orgnazationEmail',
    'mobileNo',
    'department',
    'designation',
    'location',
    'action',
  ];

  allSelected: string[] = [
    'sr_no',
    'employeeId',
    'name',
    'gender',
    'bloodGroup',
    'orgnazationEmail',
    'mobileNo',
    'department',
    'designation',
    'location',
    'action',
  ];

  displayedColumns: string[] = [
    'sr_no',
    'employeeId',
    'name',
    'gender',
    'bloodGroup',
    'orgnazationEmail',
    'mobileNo',
    'department',
    'designation',
    'location',
    'action',
  ];
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
  dashboardForm!: FormGroup;
  selectedValues: any[] = [];

  constructor(
    private router: Router,
    private headerTitleService: HeaderTitleService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}
  pageChangeEvent(event: any) {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.recordLength = response.employees.getEmployeeList.length;
      this.dataSource = new MatTableDataSource<any>(
        response.employees.getEmployeeList
      );
      this.sortedData = this.dataSource;

      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
    });
  }

  selectionChange(event: any) {
    if (event.value.length > 0) {
      this.displayedColumns = this.displayedCounmForDropDown.filter((element) =>
        event.value.includes(element)
      );
    } else {
      this.displayedColumns=this.displayedCounmForDropDown;

    }
  }

  openAddEmployeeDialog(data: any) {
    const careerJobDialogRef = this.dialog.open(AddUpdateEmployeeComponent, {});

    careerJobDialogRef.afterClosed().subscribe((result) => {
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
      data: data,
    });

    deleteJobDialogRef.afterClosed().subscribe((result) => {});
  }

  openUpdateEmployeeDialog(data: any) {
    const deleteJobDialogRef = this.dialog.open(EditEmployeeComponent, {
      width: '40vw',
      maxWidth: '40vw',
      data: data,
    });

    deleteJobDialogRef.afterClosed().subscribe((result) => {});
  }

  onChangeMonth(e: any) {
    this.selectedMonth = e.value;
  }

  onChangeDept(selectedDepartment: any) {
    debugger
    this.selectedDepartment = selectedDepartment;
  if(selectedDepartment){
    this.displayedColumns = this.department.filter((element:any)=>{
      selectedDepartment.includes(element)
    })
  }
  else{
    this.displayedColumns = this.displayedCounmForDropDown
  }
  }

  onChangeDes(e: any) {
    this.selectedDesignation = e.value;
  }

  onChangeLocation(e: any) {
    this.selectedLocation = e.value;
  }

  onViewClick(type: string) {
    if (type == 'grid') {
      this.router.navigate(['/employeeMgnmt/employee-grid-view']);
    }
  }
}
