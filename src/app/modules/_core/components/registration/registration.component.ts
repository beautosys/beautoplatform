import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  filterDropdown = ['Vendor', 'Candidate', 'E-commerce user', 'Startup user', 'Subscriber'];
  select: any
  selectedRole: any = [];
  userRole: any
  submitted: boolean = false;
  registrationForm: FormGroup;
  isTChecked: boolean = false;
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private authService: AuthService, private headerTitleService: HeaderTitleService) {
    this.headerTitleService.updatedTitle('');
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
      role: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    })

  }

  get registrationFormControl() {
    return this.registrationForm.controls;
  }



  OnChangeCurrencyName(event: any) {
    this.selectedRole = [];
    this.userRole = event.value
    if (this.userRole == 'Candidate')
      this.userRole = "candidate";
      console.log(this.userRole);
    this.selectedRole.push(this.userRole);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid && this.isTChecked) {
      var data =
      {
        "username": this.registrationForm.controls.username.value,
        "email": this.registrationForm.controls.email.value,
        "password": this.registrationForm.controls.password.value,
        "role": this.selectedRole,
      }

      this.authService.postSignup(data).subscribe((responce: any) => {
        if (responce.code === "S203") {
          this.openSuccessDialog();
          // this.router.navigate(['auth/login']);
        }
        if (responce.error === "ER205" || responce.error === "ER204") {
          this._snackBar.open(responce.errorMessage, '', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 2000,
            panelClass: ['red-snackbar']
          });
        }
        // this.registrationForm.reset();
      })
    }

  }

  // onContinue(){
  //   this.router.navigate(['auth/login']);
  // }

  openSuccessDialog(){
       const successDialogRef = this.dialog.open(RegistrationDialogComponent, {
         width: '40vw',
           maxWidth: '40vw',
       });
   
       successDialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['auth/login']);
       });
   
   }

}

@Component({
  selector: 'success-dialog',
  templateUrl: './registration.dialog.component.html',
  styleUrls: ['./registration.dialog.component.scss'],
})
export class RegistrationDialogComponent  {
  constructor( public successDialogRef: MatDialogRef<RegistrationComponent>){
  }

  onContinue(){
    this.successDialogRef.close();
  }
}
