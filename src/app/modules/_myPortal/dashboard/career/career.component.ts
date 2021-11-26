import { Component, Inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminCareerService } from './services/admin-career.service';
import { CareerJob } from './model/careers';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, AfterViewInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  displayedColumns: string[] = ['jobID', 'department', 'openPosition', 'location', 'qualification', 'keySkillSets', 'experienceLevel', 'noOfResources', 'salaryRange', 'jobDescription', 'details', 'info', 'action'];
  // columnsToDisplay: string[] = ['jobID', 'department', 'openPosition', 'location','qualification','keySkillSets','experienceLevel','noOfResources','salaryRange','jobDescription','details','info','action'];
  dataSource: any;
  sortedData: any;
  dept: Array<any> = [];
  desg: Array<any> = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  data: any;
  constructor(private headerTitleService: HeaderTitleService, private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, public dialog: MatDialog, private adminCareerService: AdminCareerService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.data = response.careers.listofJobDetails;

      this.dataSource = new MatTableDataSource<CareerJob[]>(response.careers.listofJobDetails);
      this.sortedData = this.dataSource;
      this.dept = response.careers.getDepartmentList;
      this.desg = response.careers.getDesignationList;
      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
    });
  }



  openJobDialog(jobInfo: any) {

    const careerJobDialogRef = this.dialog.open(CareerJobComponent, {
      width: '60vw',
      maxWidth: '60vw',
      panelClass: 'mobile-width',
      data: { dept: this.dept, desg: this.desg, jobInfo: jobInfo }
    });

    careerJobDialogRef.afterClosed().subscribe(result => {
      if (result != undefined || result != null) {
        // if(result.code!='401'){
        this.openMessage(result.msg);

        // }
      }
    });

  }

  openMessage(msg: string) {
    this._snackBar.open(msg, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['success-snackbar']
    });
    this.updateList();

  }

  updateList() {
    this.adminCareerService.listofJobDetails().subscribe(
      response => {
        this.data=response;
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  openDeleteDialog(data: any) {
    const deleteJobDialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '40vw',
      maxWidth: '40vw',
      data: data
    });

    deleteJobDialogRef.afterClosed().subscribe(result => {
      (result);
      if (result != undefined || result != null) {
        // if(result.code!='401'){
        // this.deleteJob(data)
        this.openMessage(result.msg);

        // }
      }
    });

  }

  filterTable(event: any) {

    let filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

@Component({
  selector: 'career-job-dialog',
  templateUrl: './careers-job.component.html',
  styleUrls: ['./careers-job.component.scss'],
})
export class CareerJobComponent implements OnInit {
  submitted: boolean = false;
  jobForm: FormGroup;
  dept: Array<any> = [];
  desg: Array<any> = [];
  constructor(private adminCareerService: AdminCareerService,
    public careerJobDialogRef: MatDialogRef<CareerJobComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dept = data.dept;
    this.desg = data.desg;

    this.jobForm = new FormGroup({
      department: new FormControl('', [Validators.required]),
      openPosition: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      keySkillSets: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      experienceLevel: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      noOfResources: new FormControl('', [Validators.required]),
      salaryRange: new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]*$')]),
      jobDescription: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      qualification: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      info: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      details: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      designation: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit(): void {
    if (this.data.jobInfo != null) {
      this.jobForm.setValue({
        department: this.data.jobInfo.department,
        openPosition: this.data.jobInfo.openPosition,
        location: this.data.jobInfo.location,
        keySkillSets: this.data.jobInfo.keySkillSets,
        experienceLevel: this.data.jobInfo.experienceLevel,
        noOfResources: this.data.jobInfo.noOfResources,
        salaryRange: this.data.jobInfo.salaryRange,
        jobDescription: this.data.jobInfo.jobDescription,
        qualification: this.data.jobInfo.qualification,
        info: this.data.jobInfo.info,
        details: this.data.jobInfo.details,
        designation: this.data.jobInfo.designation,
      });
    }
  }

  get jobFormControl() {
    return this.jobForm.controls;
  }



  onSubmit() {
    this.jobForm.value.noOfResources = this.jobForm.value.noOfResources.toString();
    this.jobForm.value.salaryRange = this.jobForm.value.salaryRange.toString();
    this.submitted = true;
    if (this.jobForm.valid) {
      if (this.data.jobInfo != null) {
        this.jobForm.value['jobID'] = this.data.jobInfo.jobID;

        this.adminCareerService.updateJob(this.jobForm.value).subscribe(
          response => {
            this.careerJobDialogRef.close({ code: response.code, msg: response.message, });
          }
        );
      } else {
        this.adminCareerService.addJob(this.jobForm.value).subscribe(
          response => {
            this.careerJobDialogRef.close({ code: response.code, msg: response.message, });
          }
        );
      }

    }
  }

  onChangeDepartment(e: any) {

    this.jobForm.get('department')?.patchValue(e.value);
  }

  onChangePosition(e: any) {
    this.jobForm.get('designation')?.patchValue(e.value);
  }


}

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent {
  constructor(private adminCareerService: AdminCareerService, public deleteJobDialogRef: MatDialogRef<CareerJobComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNo() {
    this.deleteJobDialogRef.close();
  }

  onYes() {
    this.adminCareerService.deletejob(this.data.jobID).subscribe(
      response => {

        this.deleteJobDialogRef.close({ code: response.code, msg: response.errorMessage, });
      }
    );
  }
}
