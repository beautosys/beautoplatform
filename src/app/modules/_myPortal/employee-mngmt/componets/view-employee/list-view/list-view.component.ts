import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AddEmployeeComponent } from '../../add-employee/add-employee.component';
import { DeleteEmployeeComponent } from '../../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../../edit-employee/edit-employee.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  // employees = [
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "1"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "2"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "3"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "4"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "2"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "4"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "3"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "1"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "2"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "3"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "4"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "2"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "4"
  //   },
  //   {
  //     "employeeNo": "001",
  //     "name": "xyz",
  //     "gender": "Male",
  //     "bloodGroup": "A+",
  //     "emailId": "xyz@gmail.com",
  //     "mobileNumber": "1212121212",
  //     "department": "Lorem Ipsum",
  //     "designation": "Lorem Ipsum",
  //     "location": "Lorem Ipsum",
  //     "joiningDate": "20/10/2020",
  //     "totalExperience": "Lorem Ipsum",
  //     "residentialAddress": "Lorem Ipsum",
  //     "linkedinUrl": "Lorem Ipsum",
  //     "skupeUrl": "Lorem Ipsum",
  //     "facebookUrl": "Lorem Ipsum",
  //     "experienceLevel": "3"
  //   }
  // ];
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

  displayedColumns: string[] = ['sr_no', 'employeeid', 'name', 'gender', 'blood_group', 'personal_email', 'contact_no', 'department', 'designation', 'location', 'action'];
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
      this.recordLength = response.employees.length;
      this.dataSource =new MatTableDataSource<any>(response.employees); 
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

    const careerJobDialogRef = this.dialog.open(AddEmployeeComponent, {});

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
    if (type == 'grid') {
      this.router.navigate(['/employeeMgnmt/employee-grid-view']);
    }
  }


}
