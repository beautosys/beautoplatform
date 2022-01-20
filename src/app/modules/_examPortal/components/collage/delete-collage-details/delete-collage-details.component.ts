import { SnackBarService } from './../../../../../_snackBar/snack-bar.service';
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
    @Inject(MAT_DIALOG_DATA) public data: any,private collageservices:CollageService,
    private snackbarservices:SnackBarService
   ) {

this.collageData = data;
    

    }

  ngOnInit(): void {
    console.log('this.data',this.data)
  }

  onDeleteCollage(){
  
this.collageservices.deleteCollageDetails(this.collageData.collegeId,this.collageData.name).subscribe((responce:any)=>{
  console.log(responce)
  if(responce.code= "S229"){
    this.dialogRef.close();
    let msg=this.collageData;
    this.snackbarservices.openSnackBarFrSuccess( `${msg.name }` + ' ' + 'Deleted successfully');   
  }
})
  }

OnCancle(){
  this.dialogRef.close()
}
}
