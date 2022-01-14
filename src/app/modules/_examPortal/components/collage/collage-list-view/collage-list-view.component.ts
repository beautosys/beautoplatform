import { CollageDetailsComponent } from './../collage-details/collage-details.component';
import { DeleteCollageDetailsComponent } from './../delete-collage-details/delete-collage-details.component';
import { CollageService } from './../_services/collage.service';
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
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { SnackBarService } from 'src/app/_snackBar/snack-bar.service';
import { AddcollagesComponent } from '../addcollages/addcollages.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-collage-list-view',
  templateUrl: './collage-list-view.component.html',
  styleUrls: ['./collage-list-view.component.scss']
})
export class CollageListViewComponent implements OnInit {
  designation = ['All', 'HR Finance', 'Jr Java Devloper', 'Frontend Devloper'];
  selectedDesignation = 'All';
  department = ['All', 'HR', 'IT', 'Mech'];
  selectedDepartment = 'All';
  location = ['All', 'Pune', 'Mumbai', 'Chennai', 'Bengleru'];
  selectedLocation = 'All';
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  selectedMonth = 'January';
  displayedColumns: string[] = ['name', 'location', 'country','state', 
  'contactPer1','contactEmail1','contactPer1ContactNo','grade','yearOfEsta','accredation','status','action'];

  // displayedColumns: string[] = ['sr_no', 'COLLEGEDETAILS', 'COUNTRY', 'DEPARTMENT', 'CONTACTPERSONNAME', 'CONTACTPERSONEMAIL', 
  //  'CONTACTNUMBER',  'action'];

  CollageData = [];
  dataSource = new MatTableDataSource(this.CollageData);
  dataSubject = new BehaviorSubject<Element[]>([]);

  sortedData: any;
  clientName: string = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  pageLength = 100;
  pageSize = 10;

  recordLength: number = 0;

  constructor(private router: Router, private headerTitleService: HeaderTitleService, 
    private activatedRoute: ActivatedRoute, private _snackBarService: SnackBarService, public dialog: MatDialog,
    private collageservices:CollageService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {


  this.getCollageListFromServices();
    // this.activatedRoute.data.subscribe((response: any) => {

    //   // this.dataSource = response.collagesListResolver.getCollageList();
    //   this.dataSource =new MatTableDataSource<any>(response.collagesListResolver); 
    //   this.sortedData=this.dataSource;

    //   this.headerTitleService.updatedTitle(response.title);
    //   this.headerTitleService.updatedStart(response.start);
    // });

  }





  getCollageListFromServices(){
    this.collageservices.getCollageList().subscribe((res:any)=>{
      this.dataSource.data = res;

      console.log(this.dataSource)
    })
  }
  openAddCollageDialog(data: any) {
const dailogCollege = this.dialog.open(AddcollagesComponent,{
  
})
}


  openDeleteCollageDialog(data: any) {
const dailog = this.dialog.open(DeleteCollageDetailsComponent,{
  data:data
})
  }

  openViewCollageeDialog(name:any){
debugger
const dailog = this.dialog.open(CollageDetailsComponent,{
  data:name
})
  }


  openUpdateCollageeDialog(data: any) {

   
  }


  ViewListOfCollage(type:any){

if(type='collageList'){
  this.router.navigate(['/examPortal/collageList'])

}
  }

GrigListOfCollage(type:any){
if(type = 'collageGrid'){
  this.router.navigate(['/examPortal/collageGrid'])
}
}
}
