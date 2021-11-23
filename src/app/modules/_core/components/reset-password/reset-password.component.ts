import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  submitted: boolean = false;
  resetPasswordForm: any;
  isError:boolean=false;
  resetPasswordSubscription: Subscription = new Subscription;
  constructor( private route:ActivatedRoute ,private fb: FormBuilder, private router:Router, private authService:AuthService, public dialog: MatDialog, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
    // this.headerTitleService.updatedTitle('');
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.MatchPassword('password', 'confirmPassword'),
    });
  }

  get registerFormControl() {
    return this.resetPasswordForm.controls;
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: any) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        confirmPasswordControl.setErrors(null);
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        confirmPasswordControl.setErrors(null);
      }
      if (confirmPasswordControl.value == '') {
        confirmPasswordControl.setErrors({ required: true });
      } else if (passwordControl.value !== confirmPasswordControl.value && passwordControl.value != '') {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    if(this.resetPasswordForm.valid){
      this.resetPasswordSubscription = this.authService.resetPassword({newPassword:this.resetPasswordForm.value.password,confirmPassword:this.resetPasswordForm.value.confirmPassword,email:localStorage.getItem('email')}).subscribe(
        response=>{
          if(response.code=="204"){
            this.isError=false;
            this.openDialog()
            
          }else{
            this.isError=true;
          }
        }
      );
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(){
    this.resetPasswordSubscription.unsubscribe();
  }

}



@Component({
  selector: 'reset-password-dialog',
  templateUrl: 'reset-password-dialog.component.html',
})
export class ExampleDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>) { }
  
  onOk(): void {
    this.dialogRef.close();
  }
  
}
