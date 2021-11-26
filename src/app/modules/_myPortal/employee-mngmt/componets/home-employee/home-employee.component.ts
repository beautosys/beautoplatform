import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { EmployeeService } from '../../_services/employee.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss'],
  providers: [DatePipe]
})
export class HomeEmployeeComponent implements OnInit {
  employeeList = []
  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;
  todayDate;
  currentDate = new Date();

  status = ['Confirmed', 'Consultant', 'Probation']

  // constructor(private fb: FormBuilder, private datePipe: DatePipe, private employeeService: EmployeeService) {
    constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.todayDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.basicInfoForm = new FormGroup({
      empId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      reportingManager: new FormControl(''),
      status: new FormControl(''),
      dateOfJoining: new FormControl(''),
      probationPeriod: new FormControl('', [Validators.required]),
      confirmationDate: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      alternateMobileNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
      emergencyContactName: new FormControl('', [Validators.required]),
      emergencyContactNo: new FormControl('', [Validators.required]),
      fatherOrSpouseName: new FormControl('', [Validators.required]),

    })
    this.getEmployee();
  }


  getEmployee() {

    // this.employeeService.getEmployeeList().subscribe((getResponce: any) => {

    //   this.employeeList = getResponce[0]
    // })

  }

  get basicInfoFormControl() {
    return this.basicInfoForm.controls;
  }

  onChangeStatus(e: any) {
    this.basicInfoForm.get('status')?.patchValue(e.value);
  }

  onBasicInfoFormSubmit() {
    this.submitted = true;
  }

}
