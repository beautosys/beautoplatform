import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { CollageService } from '../../collage/_services/collage.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
  providers: [DatePipe]
})
export class AddStudentComponent implements OnInit {
  studentForm:FormGroup;
  submitted:boolean=false;
  communicationSkill:string[]=[
    'Written Communication',
    'Oral Communication',
    'Presentation',
    'Active Listening',
    'Nonverbal Communication',
    'Feedback',
    'Respect  ',
    'Confidence',
    'Clarity ',
    'Honesty ',
    'Friendliness '
  ];
  techSkill:string[]=[
    'Data Management',
    'Business Analysis',
    'Accounting',
    'Project Management',
    'Engineering',
    'Marketing',
    'Medicine',
    'Coding or Programming',
    'Graphic Design',
    'Productivity Software'
  ];
  languageSkill:string[]=[
    'English',
    'Hindi',
    'Marathi',
    'Tamil',
    'Kannada',
    'Telugu',
    'Malayalam',
    'Odia',
    'Kashmiri',
    'Manipuri',
    'Punjabi',
    'Urdu'
  ];
  countryList:string[]=[];
  countryOptions: Observable<string[]> | undefined;
  csOptions: Observable<string[]> | undefined;
  tsOptions: Observable<string[]> | undefined;
  languageOptions: Observable<string[]> | undefined;

  todayDate;
  currentDate = new Date();
  constructor(private datePipe: DatePipe,private activatedRoute:ActivatedRoute, private headerTitleService:HeaderTitleService, private collageservices:CollageService) {
    this.todayDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.studentForm=new FormGroup({
      firstName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')] ),
      lastName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      fatherName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      motherName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      dateOfBirth:new FormControl(''),
      phoneNumber:new FormControl('',[Validators.required, Validators.maxLength(20),Validators.pattern('^[0-9]*$')]),
      alternatePhoneNumber:new FormControl('',[Validators.required,Validators.maxLength(20), Validators.pattern('^[0-9]*$')]),
      address:new FormControl(''),
      briefDescriptionAboutStudent:new FormControl(''),
      
      studentLanguageKnow:new FormControl(''),
      studentSoftSkills:new FormControl(''),
      studentCommunicationSkills:new FormControl(''),
      studentTechnicalSkills:new FormControl(''),
      studentLanguageKnown:new FormControl(''),
      country:new FormControl(''),
      state:new FormControl(''),
      studentDepartment:new FormControl(''),
      studentSemester:new FormControl(''),
      resume:new FormControl(''),
      photo:new FormControl('')
    })
   }

  ngOnInit() {
   // this.getCountryList();
    this.activatedRoute.data.subscribe(
      (response: any) => {
        this.headerTitleService.updatedTitle(response.title);
        this.headerTitleService.updatedStart(response.start);
      }
    );
    this.countryOptions = this.studentFormControls.country.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,'countryList')),
    );
    this.csOptions = this.studentFormControls.studentCommunicationSkills.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,'CommunicationSkills')),
    );
    this.tsOptions = this.studentFormControls.studentTechnicalSkills.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,'TechnicalSkills')),
    );
    this.languageOptions = this.studentFormControls.studentLanguageKnown.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,'LanguageKnown')),
    );
  }

  get studentFormControls(){
    return this.studentForm.controls;
  }

  private _filter(value: string, filterFor:string): string[] {
    const filterValue = value.toLowerCase();
    let options:any;
    if(filterFor=='countryList'){
      options=this.countryList.filter(option => option.toLowerCase().includes(filterValue));
    }

    if(filterFor=='CommunicationSkills'){
      options=this.communicationSkill.filter(option => option.toLowerCase().includes(filterValue));
    }

    if(filterFor=='TechnicalSkills'){
      options=this.techSkill.filter(option => option.toLowerCase().includes(filterValue));
    }

    if(filterFor=='LanguageKnown'){
      options=this.languageSkill.filter(option => option.toLowerCase().includes(filterValue));
    }

    return options;
  }

  // getCountryList(){
  //   this.collageservices.getCountryList().subscribe(
  //     response=>{
  //       let countries:any;
  //       countries=response
  //       for(let i in countries){
  //         this.countryList.push(countries[i].countryName)
  //       }
  //     }
  //   );
  // }


  onSubmit(){
this.submitted=true;
  }

}
