import { CollageDetailsComponent } from './../collage-details/collage-details.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { AddUpdateEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/add-update-employee/add-update-employee.component';
import { DeleteEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/edit-employee/edit-employee.component';
import { EmployeeService } from 'src/app/modules/_myPortal/employee-mngmt/services/employee.service';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { CollageService } from '../_services/collage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-collage-grid-view',
  templateUrl: './collage-grid-view.component.html',
  styleUrls: ['./collage-grid-view.component.scss']
})
export class CollageGridViewComponent implements OnInit {
  CollageData = [];
  arrayCoolageData = []
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
  last:number=0;
  firstIndex:number=0;
  lastIndex:number=11;
  isPrevOn:boolean=false;

  constructor(private employeeService:EmployeeService, private router: Router,
     private headerTitleService: HeaderTitleService, private activatedRoute: ActivatedRoute, 
     private _snackBar: MatSnackBar, public dialog: MatDialog,  private collageservices:CollageService) { }
  pageChangeEvent(event: any) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {

    // this.employeeService.updatedPageNumber(0);

  this.getCollageListFromServices()
  }

  goToDetails(event:any){

const dailog = this.dialog.open(CollageDetailsComponent,{
  data:event
})

// this.router.navigate(['/examPortal/collage/details/'+ `${event}`])
  }


  getCollageListFromServices(){
    this.collageservices.getCollageList().subscribe((res:any)=>{
      this.CollageData = res;

      console.log(this.CollageData)
    })
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
