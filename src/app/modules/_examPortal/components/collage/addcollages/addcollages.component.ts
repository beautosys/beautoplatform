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
  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;

  currentDate = new Date();

  status = ['Confirmed', 'Consultant', 'Probation'];
  countryName: any;

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
      collageRegistrations:new FormControl(''),
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
      CollegeBiography: new FormControl(''),
    });
  }

  getUniversityList() {
    this.collageservices.getUniversity().subscribe((responce: any) => {
   
      this.UniversityGetArray = responce;
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
  submitCollageForm() {
    var data = {
      collegeName: this.basicInfoForm.value.collegeName,
      location: this.basicInfoForm.value.location,
      collageRegistrations: this.basicInfoForm.value.collageRegistrations,
      contactPerName1: this.basicInfoForm.value.contactPerName1,
      contactPerName2: this.basicInfoForm.value.contactPerName2,
      contactPerName3: this.basicInfoForm.value.contactPerName3,
      contactPerName4: this.basicInfoForm.value.contactPerName4,
      contactPerName5: this.basicInfoForm.value.contactPerName5,
      contactPerEmail1: this.basicInfoForm.value.contactPerEmail1,
      contactPerEmail2: this.basicInfoForm.value.contactPerEmail2,
      contactPerEmail3: this.basicInfoForm.value.contactPerEmail3,
      contactPerEmail4: this.basicInfoForm.value.contactPerEmail4,
      contactPerEmail5: this.basicInfoForm.value.contactPerEmail5,
      contactPer1ContactNo: this.basicInfoForm.value.contactPer1ContactNo,
      contactPer2ContactNo: this.basicInfoForm.value.contactPer2ContactNo,
      contactPer3ContactNo: this.basicInfoForm.value.contactPer3ContactNo,
      contactPer4ContactNo: this.basicInfoForm.value.contactPer4ContactNo,
      contactPer5ContactNo: this.basicInfoForm.value.contactPer5ContactNo,
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
        this.snackbarservices.openSnackBarFrSuccess(
          'Details Saved successfullyCollege registerd successfully'
        );
        this.dialogRef.close();
      }
    });
  }
}
