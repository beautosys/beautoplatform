import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollageService } from '../_services/collage.service';

@Component({
  selector: 'app-collage-details',
  templateUrl: './collage-details.component.html',
  styleUrls: ['./collage-details.component.scss']
})
export class CollageDetailsComponent implements OnInit {
  collageDetails:any
 collageData:any
  constructor(private activateRouter:ActivatedRoute,
    public dialogRef: MatDialogRef<CollageDetailsComponent>,
  
    @Inject(MAT_DIALOG_DATA) public data: any, private collageservices:CollageService
   ) {
     debugger

    this.collageDetails = data;

     this.activateRouter.params.subscribe((params:any)=>{
this.collageDetails = params['collageName'];

     })
    }

  ngOnInit(): void {
    this.viewCollageDetails();
    console.log('this.data',this.data)
  }


  viewCollageDetails(){
    this.collageservices.viewMoreOfCollage(this.data).subscribe((responce:any)=>{
      console.log(responce);
      this.collageData = responce
    })
  }

}
