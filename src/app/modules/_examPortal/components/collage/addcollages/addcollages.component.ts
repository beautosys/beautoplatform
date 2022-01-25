import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Event } from '@angular/router';
import { SnackBarService } from './../../../../../_snackBar/snack-bar.service';
import { CollageService } from './../_services/collage.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/modules/_myPortal/employee-mngmt/componets/add-employee/add-employee.component';
import { CountryStateService } from 'src/app/shared/CountryStateServices/country-state.service';

@Component({
  selector: 'app-addcollages',
  templateUrl: './addcollages.component.html',
  styleUrls: ['./addcollages.component.scss'],
})
export class AddcollagesComponent implements OnInit {
  selecteduniversityModel: any="";
  selectedCountryModel: any = "";
  selectSateModel:any=""
  filteredCountries: any=[];
  filteredState:any=[];
  allountry:any=[];
  allUniversity:any=[];
  allState:any[]=[]
  stateInfo: any[] = [];
  isState:boolean = false;
  countryGetArray: any = [];
  StateGetArray: any = [];
  selectedCountry:any;
  filterdUniversity: any = [];
  uniqUniversityGetArray:any=[]
  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;
  ishideAddMorebutton:boolean= true
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
    private CountryStateService:CountryStateService,
    private fb:FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.getUniversityList();
    this.getCountry();
    this.getStateListByCountryName();
    this.basicInfoForm = this.fb.group({
      collegeName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      grade:['', [Validators.required]],
      yearOfEsta: ['', [Validators.required]],
      university: ['', [Validators.required]],
      accredation: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      CollegeUniAffilation:['', [Validators.required]],
      CollegeBiography: ['', [Validators.required]],
      contactPer1ContactNo: ['', [Validators.required]],
      contactPer2ContactNo:['', [Validators.required]],
      // files: ['', [Validators.required]],
      newaddMoreContacts: this.fb.array([this.createNewFeild()])
    });
  }


  
  createNewFeild() {
    return this.fb.group({
      contactPerName1: [''],
      contactPerName2: [''],
      contactPerEmail1: [''],
      contactPerEmail2: [''],
    

    })
  }
  addMoreConatctsFeilds(){
    // (this.basicInfoForm.controls['newaddMoreContacts'] as FormArray).push(this.createNewFeild())

    if (this.basicInfoForm.value.newaddMoreContacts.length === 4) {
      this.ishideAddMorebutton = false;
    } else {
      this.ishideAddMorebutton = true;
    }
    if (this.basicInfoForm.value.newaddMoreContacts.length <= 4) {
      
      this.getControls().push(this.createNewFeild());
     

    }
  }
 
  getControls() {
    return (this.basicInfoForm.get('newaddMoreContacts') as FormArray).controls;
  }

  OnKeyCollegeNameUniques(){
    
  }
  closetier(event:any){
this.getControls().splice(event)
  }
  getUniversityList() {
    this.collageservices.getUniversity().subscribe((responce: any) => {
      this.allUniversity = responce;
      this.filterdUniversity = responce;
    });
  }

  onSelectionCountry(selectedcountryNgModel: any) {
    console.log('selection value', selectedcountryNgModel);
  }

  getCountry() {
    this.CountryStateService.getCountryList().subscribe((responce: any) => {
      this.allountry = responce;
      this.filteredCountries = responce;
      // this.countryName = this.filteredCountries.country.countryName
    });
  }

  onSelected(event:any) {
    this.CountryStateService.getStateBySelectCountry(event).subscribe((responce: any) => {
      this.allState = responce
      this.filteredState = responce;
      if(this.filteredState.length > 0 ){
        this.isState = true
      }
      else{
        this.isState = false
      }
    });
   

  }
  getStateListByCountryName() {
    this.allState
    }

    OnAutocompleteStateCall(){
      debugger
      if(this.selectSateModel){
      this.filteredState = this.allState.filter((e:any)=>{
        e.stateName.trim().toLowerCase().includes(this.selectSateModel)
      })
      }
      else {
        this.filteredState = this.allState
      }
        }
        
  onAutoCompleteUniversitySearch(){
    if (this.selecteduniversityModel) {
      this.filterdUniversity = this.allUniversity.filter((element:any) =>
      element.universityName.trim().toLowerCase().includes(this.selecteduniversityModel)
      );
    } else {
     this.filterdUniversity = this.allUniversity
    }
  }

  onAutoCompleteCountrySearch() {
   
    if (this.selectedCountryModel) {
      this.filteredCountries = this.allountry.filter((element:any) =>
      element.countryName.trim().toLowerCase().includes(this.selectedCountryModel)
      );
    } else {
     this.filteredCountries = this.allountry
    
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
    debugger
    // var data = {
    //   collegeName: this.basicInfoForm.value.collegeName,
    //   location: this.basicInfoForm.value.location,
    //   contactPersonsDetails:[
    //     {
    //       name:this.basicInfoForm.controls.newaddMoreContacts.value.contactPerName1,
    //       email:this.basicInfoForm.controls.newaddMoreContacts.value.contactPerEmail1,
    //     }
    //   ],
     

    //   contactPer1ContactNo: this.basicInfoForm.value.contactPer1ContactNo,
    //   contactPer2ContactNo:this.basicInfoForm.value.contactPer2ContactNo,
    //   grade: this.basicInfoForm.value.grade,
    //   yearOfEsta: this.basicInfoForm.value.yearOfEsta,
    //   university: this.basicInfoForm.value.university,
    //   accredation: this.basicInfoForm.value.accredation,
    //   country: this.basicInfoForm.value.country,
    //   state: this.basicInfoForm.value.state,
    //   CollegeUniAffilation: this.basicInfoForm.value.CollegeUniAffilation,
    //   CollegeBiography: this.basicInfoForm.value.CollegeBiography,
    // };

    this.collageservices.addCollageDetails(this.basicInfoForm.value).subscribe((responce: any) => {
      if (responce.code == 'S208') {
       
       this.collageservices.getCollageList().subscribe((getcollegeresponce:any)=>{
        //  this.getCollageDetailsforUpload = getcollegeresponce;
        if(getcollegeresponce){
           let getCollegeFeild= this.basicInfoForm.value;
           getCollegeFeild['collegeId']=getcollegeresponce.collegeId;
           getCollegeFeild['name']=getcollegeresponce.name;
 this.collageservices.uploadCollageLogo(this.file,getCollegeFeild).subscribe((uploaded:any)=>{
   
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
