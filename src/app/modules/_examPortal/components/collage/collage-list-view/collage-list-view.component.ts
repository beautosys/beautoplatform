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
  allfilteredDataByEvent:any[]=[]
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

  ngOnInit(): void {
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
    this.getCountry();
    this.getStateList();


console.log('filterobj',this.filterSelectObj)
    this.dataSource.filterPredicate = this.createFilter();
this.uniqDataSource = this.dataSource.data;


  }

  onChangeDept(event:any){
   

  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
filterinnnerdata:any = []

  onCountryTableFilter(event:any){
  this.dataSource.data =   this.allfilteredDataByEvent.filter((element:any)=>{
     
 event.value.includes(element)
//  this.dataSource.data = data
 
  
    })
  }

  selectionChange(event:any){

  if(event.value.length > 0){
  
    this.displayedColumns = this.displayedCounmForDropDown.filter((e:any)=>
    event.value.includes(e))
  }
  else{
    this.displayedColumns = this.displayedCounmForDropDown;
  }

  }
  onChangeMonth(e: any) {
    this.selectedMonth = e.value;
  }
  filterChange(filter:any, event:any) {
    //let filterValues = {}
    debugger
    console.log('search value contry',)
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  onSelectionCountry(selectedcountryNgModel: any) {
    console.log('selection value', selectedcountryNgModel);
  }

  getCountry() {
    this.CountryStateService.getCountryList().subscribe((responce: any) => {
      this.countryGetArray = responce;
    });
  }

  getStateList() {
    this.CountryStateService.getStateList().subscribe((responce: any) => {
      this.StateGetArray = responce;
    });
  }
  getCollageListFromServices() {
    let remoteDummyData:any= []
    this.collageServices.getCollageList().subscribe((res: any) => {
      this.dataSource.data = res;
      this.allfilteredDataByEvent = res;

      console.log('allfilteredDataByEvent',this.allfilteredDataByEvent)
      this.filterSelectObj.filter((o:any)=>{
        o.options = this.getFilterObj(this.dataSource.data,o.columnProp);



         })
    });
  //  this.dataSource.data = remoteDummyData


  }

  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word:any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

  getFilterObj(fullOBj:any, key:any): any{
    const chqkObj:any[]= [];
    fullOBj.filter((obj:any)=>{
      if(!chqkObj.includes(obj[key])){
        chqkObj.push(obj[key])
      }
      return obj
    })
    return chqkObj
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

  openViewCollageeDialog(name: any) {
    const dailog = this.dialog.open(CollageDetailsComponent, {
      panelClass: 'c-css',
      data: name,
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
