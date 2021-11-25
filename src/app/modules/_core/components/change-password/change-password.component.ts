import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {

  submitted: boolean = false;
  changePasswordForm: any;
  isError:boolean=false;
  errorMsg:string='';
  changePasswordSubscription: Subscription = new Subscription;
  animal: string='asd';
  name: string='wew';
  constructor(private route:ActivatedRoute, private fb: FormBuilder, private router:Router, private authService:AuthService, public dialog: MatDialog, private headerTitleService:HeaderTitleService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
    this.headerTitleService.updatedTitle('');
    this.changePasswordForm = this.fb.group({
      oldPassword:['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.MatchPassword('password', 'confirmPassword'),
    });
  }

  get changeFormControl() {
    return this.changePasswordForm.controls;
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

  onKeyPress(){
    this.submitted = false;
    this.isError=false;
  }

  onSubmit() {
    this.submitted = true;
    if(this.changePasswordForm.valid){
      this.changePasswordSubscription = this.authService.changePassword({oldPassword:this.changePasswordForm.value.oldPassword,newPassword:this.changePasswordForm.value.password,confirmPassword:this.changePasswordForm.value.confirmPassword}).subscribe(
        response=>{
          if(response.status=="S200"){
            this.isError=false;
            this.openDialog();
            
          }else{
            this.isError=true;
            this.errorMsg=response.message;
          }
        }
      );
    }
  }

  ngOnDestroy(){
    this.changePasswordSubscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {
      width: '250px',
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['']);
    });
  }

}

@Component({
  selector: 'change-password-dialog',
  templateUrl: 'change-password.dialog.component.html',
})
export class ChangePasswordDialog {

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
