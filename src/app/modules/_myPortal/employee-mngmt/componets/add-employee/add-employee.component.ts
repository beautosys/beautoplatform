import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminClientsService } from '../../../dashboard/clients/services/admin-clients.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  submitted: boolean = false;
  basicInfoForm!: FormGroup;

  isEditable = false;
 
  currentDate = new Date();

  status = ['Confirmed', 'Consultant', 'Probation']
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
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

  }



}
