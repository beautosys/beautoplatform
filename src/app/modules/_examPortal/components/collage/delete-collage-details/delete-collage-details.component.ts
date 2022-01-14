import { CollageService } from './../_services/collage.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CollageDetailsComponent } from '../collage-details/collage-details.component';

@Component({
  selector: 'app-delete-collage-details',
  templateUrl: './delete-collage-details.component.html',
  styleUrls: ['./delete-collage-details.component.scss']
})
export class DeleteCollageDetailsComponent implements OnInit {

  collageData:any
  constructor(private activateRouter:ActivatedRoute,
    public dialogRef: MatDialogRef<CollageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private collageservices:CollageService
   ) {

this.collageData = data;
    

    }

  ngOnInit(): void {
    console.log('this.data',this.data)
  }

  onDeleteCollage(){
    debugger
this.collageservices.deleteCollageDetails(this.collageData).subscribe((responce:any)=>{
  console.log(responce)
})
  }

OnCancle(){
  this.dialogRef.close()
}
}
