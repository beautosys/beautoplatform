import { filter } from 'rxjs/operators';
import { CollageDetailsComponent } from './../collage-details/collage-details.component';
import { DeleteCollageDetailsComponent } from './../delete-collage-details/delete-collage-details.component';
import { CollageService } from './../_services/collage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { SnackBarService } from 'src/app/_snackBar/snack-bar.service';
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
  filterSelectObj:any[]= [];
  filterValues: any ={};

  selectedcountryNgModel: any;
  selectStateNgModel: any;
  selectedLocation = 'All';
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

  CollageData: any[] = [];
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


  constructor(
    private router: Router,
    public dialog: MatDialog,
    private collageservices: CollageService
  ) {
    this.filterSelectObj = [
     
    
      { 
           name:"name",
          columnProp:'name',
          options:[]
      },
     
      {
        name:"status",
          columnProp:'status',
          options:[]
      }
    ]
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getCollageListFromServices();
    this.getCountry();
    this.getStateList();
   
       
console.log('filterobj',this.filterSelectObj)
    this.dataSource.filterPredicate = this.createFilter();


  }

  filterChange(filter:any, event:any) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  onSelectionCountry(selectedcountryNgModel: any) {
    console.log('selection value', selectedcountryNgModel);
  }

  getCountry() {
    this.collageservices.getCountryList().subscribe((responce: any) => {
      this.countryGetArray = responce;
    });
  }

  getStateList() {
    this.collageservices.getStateList().subscribe((responce: any) => {
      this.StateGetArray = responce;
    });
  }
  getCollageListFromServices() {
    let remoteDummyData:any= []
    this.collageservices.getCollageList().subscribe((res: any) => {
      this.dataSource.data = res;
    
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
