import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentForm:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private headerTitleService:HeaderTitleService) {
    this.studentForm=new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      fatherName:new FormControl(''),
      motherName:new FormControl(''),
      dateOfBirth:new FormControl(''),
      phoneNumber:new FormControl(''),
      alternatePhoneNumber:new FormControl(''),
      address:new FormControl(''),
      briefDescriptionAboutStudent:new FormControl(''),
      
      studentLanguageKnow:new FormControl(''),
      studentSoftSkills:new FormControl(''),
      studentCommunicationSkills:new FormControl(''),
      studentTechnicalSkills:new FormControl(''),
      studentLanguageKnown:new FormControl(''),
      county:new FormControl(''),
      state:new FormControl(''),
      studentDepartment:new FormControl(''),
      studentSemester:new FormControl(''),
      resume:new FormControl(''),
      photo:new FormControl('')
    })
   }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (response:any)=>{
        this.headerTitleService.updatedTitle(response.title);
        this.headerTitleService.updatedStart(response.start);
      }
    );
  }

  get studentFormControls(){
    return this.studentForm.controls;
  }

  onSubmit(){
this.submitted=true;
  }

}
