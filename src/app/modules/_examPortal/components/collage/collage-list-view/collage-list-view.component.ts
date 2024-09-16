import { state } from '@angular/animations';
import { CollageService } from './../_services/collage.service';
import { CollageDetailsComponent } from './../collage-details/collage-details.component';
import { DeleteCollageDetailsComponent } from './../delete-collage-details/delete-collage-details.component';
import { CountryStateService } from './../../../../../shared/CountryStateServices/country-state.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Event } from '@angular/router';
import { AddcollagesComponent } from '../addcollages/addcollages.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-collage-list-view',
  templateUrl: './collage-list-view.component.html',
  styleUrls: ['./collage-list-view.component.scss'],
})
export class CollageListViewComponent implements OnInit {
  
  countryGetArray: any = [];
  StateGetArray: any = [];
  selectedCountry:any;
  allfilteredDataByEvent:any=[]
  uniqDataSource:any = []
  filterSelectObj:any[]= [];
  filterValues: any ={};
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
  selectedcountryNgModel: any;
  selectStateNgModel: any;
  selectedLocation = 'All';
  displayedCounmForDropDown:string[]=[ 'name',
  'country',
  'state',
  'contactPer1',
  'contactEmail1',
  'contactPer1ContactNo',
  'grade',
  'yearOfEsta',
  'accredation',
  'status',
  'action',]
  displayedColumns: string[] = [
    'name',
    'country',
    'state',
    'contactPer1',
    'contactEmail1',
    'contactPer1ContactNo',
    'grade',
    'yearOfEsta',
    'accredation',
    'status',
    'action',
  ];
  allSelected:any
  CollageData: any[] = [];
  dataSource = new MatTableDataSource(this.CollageData);
  dataSubject = new BehaviorSubject<Element[]>([]);
  apiResponse:any = [];
  sortedData: any;
  clientName: string = '';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  pageLength = 100;
  pageSize = 10;

  recordLength: number = 0;


  constructor(
    private router: Router,
    public dialog: MatDialog,
    private CountryStateService: CountryStateService,
    private collageServices:CollageService
  ) {
    this.filterSelectObj = [
      {
        name:"name",
       columnProp:'name',
       options:[]
   },

   
    ]
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.allSelected=[ 'name',
    'country',
    'state',
    'contactPer1',
    'contactEmail1',
    'contactPer1ContactNo',
    'grade',
    'yearOfEsta',
    'accredation',
    'status',
    'action',]
 this.getCollageListFromServices();

console.log('filterobj',this.filterSelectObj)
this.uniqDataSource = this.dataSource.data;
 }

  onCountryTableFilter(event:any){
    debugger
  this.allfilteredDataByEvent = this.dataSource.data.filter((element:any)=>
     
 event.value === element.country.countryId
//  this.dataSource.data = data
 )

    console.log('allfil',this.allfilteredDataByEvent)
  }

  onStateTableFilter(event:any){
  
    this.allfilteredDataByEvent = this.dataSource.data.filter((element:any)=>
     
    event.value === element.state.stateId
   //  this.dataSource.data = data
    )
    console.log('allfil',this.allfilteredDataByEvent)

  }

  selectionChange(event:any){

  if(event.value.length > 0){
  
    this.displayedColumns = this.allSelected.filter((e:any)=>
    event.value.includes(e))
  }
  else{
    this.displayedColumns = this.displayedCounmForDropDown;
  }

  }


  getCollageListFromServices() {
    this.collageServices.getCollageList().subscribe((res: any) => {
      this.dataSource.data = res;
      this.allfilteredDataByEvent = res;

      this.dataSource.data.forEach(el => {
        if(!this.countryGetArray.some((item:any)=> item.countryId === el.country.countryId)){
          this.countryGetArray.push(el.country)
        }
        if(!this.StateGetArray.some((item:any)=> item.stateId === el.state.stateId)){
          this.StateGetArray.push(el.state)
        }
      });
 

      console.log('allfilteredDataByEvent',this.allfilteredDataByEvent)
    
    });
  //  this.dataSource.data = remoteDummyData


  }


  openAddCollageDialog(data: any) {
    const dailogCollege = this.dialog.open(AddcollagesComponent, {});
    dailogCollege.afterClosed().subscribe((res) => {
      if (res) {
        this.getCollageListFromServices();
      }
    });
  }

  openDeleteCollageDialog(data: any) {
    const dailog = this.dialog.open(DeleteCollageDetailsComponent, {
   
      data: data,
    });

    dailog.afterClosed().subscribe((res) => {
      this.getCollageListFromServices();
    });
  }

  openViewCollageeDialog(data: any) {
    const dailog = this.dialog.open(CollageDetailsComponent, {
      panelClass: 'c-css',
      data: data,
    });
    dailog.afterClosed().subscribe((res) => {
      this.getCollageListFromServices();
    });
  }

  openUpdateCollageeDialog(data: any) {}

  ViewListOfCollage(type: any) {
    if ((type = 'collageList')) {
      this.router.navigate(['/examPortal/collageList']);
    }
  }

  GrigListOfCollage(type: any) {
    if ((type = 'collageGrid')) {
      this.router.navigate(['/examPortal/collageGrid']);
    }
  }
}
