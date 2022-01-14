import { CollageService } from './../_services/collage.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/add-employee/add-employee.component';

@Component({
  selector: 'app-addcollages',
  templateUrl: './addcollages.component.html',
  styleUrls: ['./addcollages.component.scss']
})
export class AddcollagesComponent implements OnInit {

  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;
 
  currentDate = new Date();

  status = ['Confirmed', 'Consultant', 'Probation'];

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private collageservices:CollageService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

 
  ngOnInit() {
      this.basicInfoForm = new FormGroup({
        collegeName: new FormControl(''),
        location: new FormControl(''),
        contactPerName1: new FormControl(''),
        contactPerName2: new FormControl(''),
        contactPerName3: new FormControl(''),
        contactPerName4: new FormControl(''),
        contactPerName5: new FormControl(''),
        contactPerEmail1: new FormControl(''),
        contactPerEmail2: new FormControl(''),
        contactPerEmail3: new FormControl(''),
        contactPerEmail4: new FormControl(''),
        contactPerEmail5: new FormControl(''),
        contactPer1ContactNo: new FormControl(''),
        contactPer2ContactNo: new FormControl(''),
        contactPer3ContactNo: new FormControl(''),
        contactPer4ContactNo: new FormControl(''),
        contactPer5ContactNo: new FormControl(''),
        grade: new FormControl(''),
        yearOfEsta: new FormControl(''),
        university: new FormControl(''),
        accredation: new FormControl(''),
        country: new FormControl(''),
        state: new FormControl(''),
        CollegeUniAffilation: new FormControl(''),
        collgeBio: new FormControl(''),


    })

  }


  submitCollageForm(){
    var data = {
      "collegeName":"HIMALYAAAAkkkk",
      "location":"ashta",
      "contactPerName1":"lakhirNITAe",
      "contactPerName2":"lakhire",
      "contactPerName3":"sadewrw",
      "contactPerName4":"",
      "contactPerName5":"",
      "contactPerEmail1":"DD1@GMAIL.COM",
      "contactPerEmail2":"DD1@GMAIL.COM",
      "contactPerEmail3":"DD1@GMAIL.COM",
      "contactPerEmail4":"DD1@GMAIL.COM",
      "contactPerEmail5":"DD1@GMAIL.COMS",
      "contactPer1ContactNo":"9492111224",
      "contactPer2ContactNo":"4826550",
      "contactPer3ContactNo":"",
      "contactPer4ContactNo":"",
      "contactPer5ContactNo":"",
      "grade":"A+",
      "yearOfEsta":"1993",
      "university":"Shivaji University",
      "accredation":"ACC",
      "country":"India",
      "state":"Maharashtra",
      "CollegeUniAffilation":"xyz",
      "collgeBio":""
 }
this.collageservices.addCollageDetails(data).subscribe((responce:any)=>{

})

  }


}
