import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerStateService } from 'src/app/pages/homeCareer/_service/career-state.service';
import { UserInfoService } from 'src/app/shared/auth/user-info/user-info.service';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  submitted: boolean = false;
  loginForm!: FormGroup;
  constructor(private route: ActivatedRoute, private userInfoService: UserInfoService,
    private careerStateService: CareerStateService, private authServices: AuthService,
    private router: Router, private headerTitleService: HeaderTitleService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
    })

    // this.headerTitleService.updatedTitle('');
    this.userInfoService.updateUserInfo({ id: '', name: '', email: '', roles: [], token: '' });
    // this.userInfoService.updateUserInfo({id:'',username:'',email:'',roles:[],token:''});
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      password: new FormControl('', [Validators.required])
    });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      var data = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
      this.authServices.postLogin(data).subscribe(
        (responce: any) => {
          if (responce) {

            localStorage.setItem('userInfo', JSON.stringify(responce));
            localStorage.setItem('tokenValue', responce.accessToken);
            this.userInfoService.updateUserInfo(responce);
            if(responce.roles[0]=='ROLE_ADMIN'){
              this.headerTitleService.updateMenuBar(false);
              this.router.navigate(['/dashboard/career']);
            }else if(responce.roles[0]=='ROLE_HRMANAGER'){
              this.headerTitleService.updateMenuBar(false);
              this.router.navigate(['/employeeMgnmt/employee-list-view']);
            }else{
              this.headerTitleService.updateMenuBar(true);
              this.router.navigate(['pages/home'])
            }
            // this.careerStateService.data.subscribe((res: any) => {
            //   console.log(res)
            //   if (res.file != null || res.finalObject != null) {
            //     this.router.navigate([res.nav]);
            //   } else {
            //     this.router.navigate(['pages/home'])
            //   }

            // });

          }

          if (responce.error === "Unauthorized") {
            alert('Unauthorized')
          }


        },
        (error: any) => {
          if (error.status == 401) {
            this._snackBar.open('Wrong user name or password', '', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 2000,
              panelClass: ['red-snackbar']
            });
          }
        }
      )
    }


  }

}
