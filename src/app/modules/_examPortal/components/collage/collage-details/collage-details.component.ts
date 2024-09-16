import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollageService } from '../_services/collage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collage-details',
  templateUrl: './collage-details.component.html',
  styleUrls: ['./collage-details.component.scss']
})
export class CollageDetailsComponent implements OnInit {
  isShowmore:boolean=false;
  collageDetails:any
 collageData:any
 @ViewChild('f') imgdata: NgForm;
 imgFile: File;
  constructor(private activateRouter:ActivatedRoute,
    public dialogRef: MatDialogRef<CollageDetailsComponent>,
  
    @Inject(MAT_DIALOG_DATA) public data: any, private collageservices:CollageService
   ) {
     

    this.collageDetails = data;
    if(this.collageDetails.collegeRelatedDocuments.length!=0 ){
      this.collageDetails['collegeImage']='http://65.1.139.72:8080'+this.collageDetails.collegeRelatedDocuments[0].path;
    }else{
      this.collageDetails['collegeImage']='assets/img/Beauto_logo.svg';
    }
    }

  ngOnInit(): void {
    // this.viewCollageDetails();
    // console.log('this.data',this.data)
  }


  onFileChanged(event:any) {
    this.imgFile = event.target.files[0];
  }
  onLogoSubmit(){
    
    // let finalObject= this.applicationForm.value;
    // finalObject['jobId']=this.data.jobID;
    // finalObject['department']=this.data.department;
    // finalObject['openPosition']=this.data.openPosition;
  let data = {
    "collegeLogo":this.imgFile,
    "collegeId":this.data.collegeId,
    "name":this.data.name
  }
  this.collageservices.uploadCollageLogo(this.imgFile,data).subscribe((res:any)=>{
console.log('logo added',res)
  })
  }

  // viewCollageDetails(){
  //   this.collageservices.viewMoreOfCollage(this.data).subscribe((responce:any)=>{
  //     console.log(responce);
  //     this.collageData = responce
  //   })
  // }



}
