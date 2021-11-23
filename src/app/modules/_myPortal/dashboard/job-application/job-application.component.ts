import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { JobApplication } from './model/job-application.model';
import { JobApplicationResolver } from './services/job-application.resolver';
import { JobApplicationService } from './services/job-application.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit, AfterViewInit {
  displayedColumns: any[] = ['candidate_id', 'firstName', 'lastName', 'dob','department','openPosition','emailID','moblieNumber','jobID','document'];
  dataSource : any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private headerTitleService:HeaderTitleService, private activatedRoute:ActivatedRoute, private jobApplicationService:JobApplicationService) { }



  ngOnInit(): void {

    this.activatedRoute.data.subscribe(
      (response:any)=>{
        this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
        if(response.applications.length!=0){

          this.dataSource=new MatTableDataSource<JobApplication[]>(response.applications);

          // this.dataSource.shift();
        }else{
          this.dataSource=[];
        }
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filterTable(event: any) {

    let filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
