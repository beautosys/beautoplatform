import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollageService } from '../_services/collage.service';

@Component({
  selector: 'app-add-update-college',
  templateUrl: './add-update-college.component.html',
  styleUrls: ['./add-update-college.component.scss']
})
export class AddUpdateCollegeComponent implements OnInit {

  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;
 
  currentDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<AddUpdateCollegeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private collageservices:CollageService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

 
  ngOnInit() {
    console.log(this.data);
      this.basicInfoForm = new FormGroup({
        collegeName: new FormControl('',[Validators.required]),
        location: new FormControl('',[Validators.required]),
        country: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        contactPerName1: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
        contactPerEmail1: new FormControl('',[Validators.required, Validators.email]),
        contactPerName2: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
        contactPerEmail2: new FormControl('',[Validators.required, Validators.email]),
        // contactPerName3: new FormControl(''),
        // contactPerName4: new FormControl(''),
        // contactPerName5: new FormControl(''),
        // contactPerEmail3: new FormControl(''),
        // contactPerEmail4: new FormControl(''),
        // contactPerEmail5: new FormControl(''),
        contactPer1ContactNo: new FormControl('',[Validators.required]),
        contactPer2ContactNo: new FormControl('',[Validators.required]),
        // contactPer3ContactNo: new FormControl(''),
        // contactPer4ContactNo: new FormControl(''),
        // contactPer5ContactNo: new FormControl(''),
        grade: new FormControl(''),
        yearOfEsta: new FormControl(''),
        university: new FormControl(''),
        accredation: new FormControl(''),
        CollegeUniAffilation: new FormControl('',[Validators.required]),
        collgeBio: new FormControl(''),
 

    })

  }

  get basicInfoFormControls() {
    return this.basicInfoForm.controls;
  }


  onSubmit(){
    this.submitted=true;
    console.table(this.basicInfoForm.value)
    if(this.basicInfoForm.valid){
      var data = {
        "collegeName":this.basicInfoForm.value.collegeName,
        "location":this.basicInfoForm.value.location,
        "contactPerName1":this.basicInfoForm.value.contactPerName1,
        "contactPerName2":this.basicInfoForm.value.contactPerName2,
        "contactPerName3":"",
        "contactPerName4":"",
        "contactPerName5":"",
        "contactPerEmail1":this.basicInfoForm.value.contactPerEmail1,
        "contactPerEmail2":this.basicInfoForm.value.contactPerEmail2,
        "contactPerEmail3":"",
        "contactPerEmail4":"",
        "contactPerEmail5":"",
        "contactPer1ContactNo":this.basicInfoForm.value.contactPer1ContactNo,
        "contactPer2ContactNo":this.basicInfoForm.value.contactPer2ContactNo,
        "contactPer3ContactNo":"",
        "contactPer4ContactNo":"",
        "contactPer5ContactNo":"",
        "grade":this.basicInfoForm.value.grade,
        "yearOfEsta":this.basicInfoForm.value.yearOfEsta,
        "university":this.basicInfoForm.value.university,
        "accredation":this.basicInfoForm.value.accredation,
        "country":this.basicInfoForm.value.country,
        "state":this.basicInfoForm.value.state,
        "CollegeUniAffilation":this.basicInfoForm.value.CollegeUniAffilation,
        "collgeBio":this.basicInfoForm.value.collgeBio,
   }
   this.collageservices.addCollageDetails(data).subscribe(
     response=>{
console.log(response);
     }
   );
    }
    


  }
}
