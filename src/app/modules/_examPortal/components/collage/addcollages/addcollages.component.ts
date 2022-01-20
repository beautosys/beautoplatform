import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Event } from '@angular/router';
import { SnackBarService } from './../../../../../_snackBar/snack-bar.service';
import { CollageService } from './../_services/collage.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/add-employee/add-employee.component';
import { CountryStateService } from 'src/app/shared/CountryStateServices/country-state.service';

@Component({
  selector: 'app-addcollages',
  templateUrl: './addcollages.component.html',
  styleUrls: ['./addcollages.component.scss'],
})
export class AddcollagesComponent implements OnInit {
  selectUniversityNgModel: any;
  selectedCountryModel: any = "";
  filteredCountries: any=[];
  allMovies:any=[];
  stateInfo: any[] = [];
  isState:boolean = false;
  countryGetArray: any = [];
  StateGetArray: any = [];
  selectedCountry:any;
  UniversityGetArray: any = [];
  uniqUniversityGetArray:any=[]
  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;

  currentDate = new Date();

  imgFile:any = File;
  status = ['Confirmed', 'Consultant', 'Probation'];
  countryName: any;
  getCollageDetailsforUpload: any;
  file: File;
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private collageservices: CollageService,
    private snackbarservices: SnackBarService,
    private CountryStateService:CountryStateService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.getUniversityList();
    this.getCountry();
    this.getStateListByCountryName();
    this.basicInfoForm = new FormGroup({
      collegeName: new FormControl(''),
      location: new FormControl(''),
      // collageRegistrations:new FormControl(''),
      contactPerName1: new FormControl(''),
      contactPerName2: new FormControl(''),
    
      contactPerEmail1: new FormControl(''),
      contactPerEmail2: new FormControl(''),
     
      contactPer1ContactNo: new FormControl(''),
      contactPer2ContactNo:new FormControl(''),
      grade: new FormControl(''),
      yearOfEsta: new FormControl(''),
      university: new FormControl(''),
      accredation: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      CollegeUniAffilation: new FormControl(''),
      CollegeBiography: new FormControl(''),
      files: new FormControl('')
    });
  }

  getUniversityList() {
    this.collageservices.getUniversity().subscribe((responce: any) => {
      this.UniversityGetArray = responce
  // this.UniversityGetArray=   this.UniversityGetArray.filter((x:any)=>{
    
  //   });
  
      
    });
  }

  onSelectionCountry(selectedcountryNgModel: any) {
    console.log('selection value', selectedcountryNgModel);
  }

  getCountry() {
    this.CountryStateService.getCountryList().subscribe((responce: any) => {
      this.allMovies = responce;
      this.filteredCountries = responce;
      this.countryName = this.filteredCountries.country.countryName
    });
  }

  onSelected(event:any) {
    this.CountryStateService.getStateBySelectCountry(event).subscribe((responce: any) => {
      this.stateInfo = responce;
      if(this.stateInfo.length > 0 ){
        this.isState = true
      }
      else{
        this.isState = false
      }
    });
   
  }
  getStateListByCountryName() {
  this.stateInfo
  }
  onAutoCompleteCountrySearch() {
   
    if (this.selectedCountryModel) {
      this.filteredCountries = this.allMovies.filter((element:any) =>
      element.countryName.trim().toLowerCase().includes(this.selectedCountryModel)
      );
    } else {
     this.filteredCountries = this.allMovies
    
    }
  }
  onBlurMethod(event:any){
console.log('temp data',event.target.value);
let tempData = {"data":event.target.value}

this.collageservices.temparorySaveCollageData(tempData.data).subscribe((responce: any) => {
  if (responce.code == 'S208') {
    this.snackbarservices.openSnackBarFrSuccess(
      'Temparory Details Saved successfully'
    );
    this.dialogRef.close();
  }
});
  }

  onSelectFile(event:any) {
    debugger

    this.file = event.target.files[0];
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]); // read file as data url
    //   reader.onload = () => {
    //     this.file = reader.result;
    //     this.basicInfoForm.patchValue({
    //       file: reader.result
    //     });
      
    //   }
    
    // }
  }
  submitCollageForm() {
    var data = {
      collegeName: this.basicInfoForm.value.collegeName,
      location: this.basicInfoForm.value.location,
      // collageRegistrations: this.basicInfoForm.value.collageRegistrations,
      contactPerName1: this.basicInfoForm.value.contactPerName1,
      contactPerName2: this.basicInfoForm.value.contactPerName2,
 
      contactPerEmail1: this.basicInfoForm.value.contactPerEmail1,
      contactPerEmail2: this.basicInfoForm.value.contactPerEmail2,
  
      contactPer1ContactNo: this.basicInfoForm.value.contactPer1ContactNo,
      contactPer2ContactNo:this.basicInfoForm.value.contactPer2ContactNo,
      grade: this.basicInfoForm.value.grade,
      yearOfEsta: this.basicInfoForm.value.yearOfEsta,
      university: this.basicInfoForm.value.university,
      accredation: this.basicInfoForm.value.accredation,
      country: this.basicInfoForm.value.country,
      state: this.basicInfoForm.value.state,
      CollegeUniAffilation: this.basicInfoForm.value.CollegeUniAffilation,
      CollegeBiography: this.basicInfoForm.value.CollegeBiography,
    };

    this.collageservices.addCollageDetails(data).subscribe((responce: any) => {
      if (responce.code == 'S208') {
       
       this.collageservices.getCollageList().subscribe((getcollegeresponce:any)=>{
        //  this.getCollageDetailsforUpload = getcollegeresponce;
         
        if(getcollegeresponce){
         
           let getCollegeFeild= this.basicInfoForm.value;
          
           getCollegeFeild['collegeId']=getcollegeresponce.collegeId;
           getCollegeFeild['name']=getcollegeresponce.name;
 this.collageservices.uploadCollageLogo(this.file,getCollegeFeild).subscribe((uploaded:any)=>{
   debugger
  this.snackbarservices.openSnackBarFrSuccess(
    'Details and logo Saved successfully'
  );
      })
        }

         console.log('getCollageDetailsforUpload',this.getCollageDetailsforUpload)
       })
       
        this.dialogRef.close();
      }
     
    });
  }
}
