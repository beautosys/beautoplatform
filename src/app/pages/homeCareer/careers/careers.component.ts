import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { CareerJob } from '../_model/careers';
import { CareerStateService } from '../_service/career-state.service';
import { CareerService } from '../_service/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
 
})
export class CareersComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  jobs:CareerJob[]=[];
  allJobs:CareerJob[]=[];
  designation:any=[];
  department:any=[];
  constructor( private careerStateService:CareerStateService,private _snackBar: MatSnackBar,public dialog: MatDialog,private careerService:CareerService, private activatedRoute: ActivatedRoute, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      for(let i in response.careers){
        this.designation.push(response.careers[i].designation);
        this.designation=[...new Set(this.designation)];
        this.department.push(response.careers[i].department.split(' ')[0]);
        this.department=[...new Set(this.department)];
      }
      this.jobs = response.careers;
      this.allJobs=response.careers;
    });

    this.activatedRoute.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  });

  this.careerStateService.data.subscribe((res:any)=>{
    if(res.file!=null || res.finalObject!=null){
      this.careerService.uploadFile(res.file,res.finalObject).subscribe(
        (response:any)=>{
          this.careerStateService.updatedData({file:null,finalObject:null,nav:''});
          this.openMessage(response.errorMessage);
        },
      );
    }

  });
    
  }

  openDialog(job:any) {
    const dialogRef = this.dialog.open(CareerDetailsDialog, {
      width: '40vw',
        maxWidth: '40vw',
        height: 'AUTO',
        panelClass:"c-css",
      data: job
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined || result!=null){
        const applicationDialogRef = this.dialog.open(CareerApplicationComponent, {
          width: '40vw',
            maxWidth: '40vw',
          data: result
        });
    
        applicationDialogRef.afterClosed().subscribe(result => {
          if(result!=undefined || result!=null){
          if(result.code!='401'){
            this.openMessage(result.msg);
          }
        }
        });
      }
      
    });
  }

  filterByRole(des:string){
    this.jobs=this.allJobs.filter(e => e.designation === des);
  }

  filterByDepartment(dep:string){
    this.jobs=this.allJobs.filter(e => e.department.split(' ')[0] === dep);
  }

  openMessage(msg:string) {
    this._snackBar.open(msg,'' ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

}

@Component({
  selector: 'career-details-dialog',
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.scss']
})
export class CareerDetailsDialog {
  
  constructor(public careerDetailsDialogRef: MatDialogRef<CareerDetailsDialog>,@Inject(MAT_DIALOG_DATA) public data: CareerJob){
  }
}

@Component({
  selector: 'career-application-dialog',
  templateUrl: './careers-application.component.html',
  styleUrls: ['./careers-application.component.scss'],
  providers: [DatePipe]
})
export class CareerApplicationComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  submitted:boolean=false;
  applicationForm: FormGroup;
  todayDate;
  currentDate=new Date();
  
  file!: File;
  constructor(private _snackBar: MatSnackBar,private careerStateService:CareerStateService, public careerApplicationDialogRef: MatDialogRef<CareerApplicationComponent>,@Inject(MAT_DIALOG_DATA) public data: CareerJob, private datePipe: DatePipe, private careerService:CareerService, private routee:Router){
    this.applicationForm= new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      emailId: new FormControl('',[Validators.required, Validators.email,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      moblieNumber:new FormControl('', [Validators.required,Validators.pattern("^[0-9]{10}$")]),
      dob:new FormControl('', [Validators.required]),
      file:new FormControl('', [Validators.required]),
    })
    

    this.todayDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');

  }

  get applicationFormControl(){
    return this.applicationForm.controls;
  }

  onFileChange(event: any){
    let regex = new RegExp("(.*?)\.(pdf|docx|doc)$");
    if((regex.test(event.target.files[0].name))){
      this.file = event.target.files[0];
    }else{
      this._snackBar.open('Please choose pdf,doc or docx file','' ,{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000,
        panelClass: ['danger-snackbar']
      });
    }
    
  }

  onSubmit(){
    console.log(this.data);
    let finalObject= this.applicationForm.value;
    finalObject['jobId']=this.data.jobID;
    finalObject['department']=this.data.department;
    finalObject['openPosition']=this.data.openPosition;
 
    this.submitted=true;
    if (this.applicationForm.valid) {
      this.careerService.uploadFile(this.file,finalObject).subscribe(
        (response:any)=>{
          this.careerApplicationDialogRef.close({code:response.code, msg:response.errorMessage,});
          this.careerStateService.updatedData({file:null,finalObject:null,nav:''});
        },
        error=>{
          this.careerApplicationDialogRef.close({code:error.error.status.toString(), msg:error.error.error });
          this.careerStateService.updatedData({file:this.file,finalObject:finalObject,nav:'/pages/job-detail'});
        }
      );
    }
  }



}
