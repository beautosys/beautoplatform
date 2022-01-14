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

@Component({
  selector: 'app-collage-grid-view',
  templateUrl: './collage-grid-view.component.html',
  styleUrls: ['./collage-grid-view.component.scss']
})
export class CollageGridViewComponent implements OnInit {

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
  last:number=0;
  firstIndex:number=0;
  lastIndex:number=11;
  isPrevOn:boolean=false;

  constructor(private employeeService:EmployeeService, private router: Router,
     private headerTitleService: HeaderTitleService, private activatedRoute: ActivatedRoute, 
     private _snackBar: MatSnackBar, public dialog: MatDialog) { }
  pageChangeEvent(event: any) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {

    // this.employeeService.updatedPageNumber(0);

    this.activatedRoute.data.subscribe((response: any) => {
      
      this.employees=[];
      // this.employees=response.employees.getEmployeeList;
      // this.recordLength = response.employees.getEmployeeList.length;
      let a:any=[];
      // for(let i=0;i<4;i++){
        for(let j=0;j<response.employees.getEmployeeList.length;j++){
          a.push(response.employees.getEmployeeList[j]);
        }
      // }
          //  this.employees=a;
      this.recordLength = a.length;
      // this.dataSource =new MatTableDataSource<any>(response.employees.getEmployeeList); 
      this.dataSource =new MatTableDataSource<any>(a); 

      this.sortedData=this.dataSource;

      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);

      this.employeeService.currentPageNumber.subscribe(
        data=>{
          let currentIndex:number=data;
          let totalPages:number= Math.floor(this.recordLength/12);
          // totalPages-=1;

          if(currentIndex==this.last){
            this.last+=1;
            // if(this.isPrevOn){
            //   if(this.lastIndex!=11){
            //     this.firstIndex+=12;
            //     // this.lastIndex-=12;
            //     this.isPrevOn=false;
            //                 }
            // }else{
            //   if(this.lastIndex==0){
            //     this.firstIndex==0;
            //     this.lastIndex+=11;
            //   }else{
            //     this.firstIndex+=12;
            //     if(totalPages!=currentIndex)
            //     this.lastIndex+=12
            //   }
              
            // }

            if(this.isPrevOn ){
              if(this.firstIndex==0 && this.lastIndex==11){
                this.firstIndex+=12;
                this.lastIndex+=12;

              }
              this.isPrevOn=false;
            }
            
            this.employees=[];
            if(totalPages==currentIndex){
              
              for(let i=this.firstIndex;i<=a.length-1;i++){
                this.employees.push(a[i]);
              }
            
            }else{

              for(let i=this.firstIndex;i<=this.lastIndex;i++){
                this.employees.push(a[i]);
              }
              this.firstIndex+=12;
              this.lastIndex+=12;
            }

          }else{
            this.last-=1;

            this.lastIndex=this.firstIndex-1;
            this.firstIndex-=12;
            this.employees=[];
            for(let i=this.firstIndex;i<=this.lastIndex;i++){
              this.employees.push(a[i]);
            }
            this.isPrevOn=true;

          }
          console.log('== After ==');
          console.log('currentIndex - '+ currentIndex);
          console.log('last - '+this.last);
          console.log('firstIndex - '+this.firstIndex);
          console.log('lastIndex - '+this.lastIndex);
          console.log('-----------');

      
        }
      );
    });


   

  }

  goToDetails(event:any){

const dailog = this.dialog.open(CollageDetailsComponent,{
  data:event
})

// this.router.navigate(['/examPortal/collage/details/'+ `${event}`])
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
