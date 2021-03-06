import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerStateService } from 'src/app/pages/homeCareer/_service/career-state.service';
import { UserInfoService } from 'src/app/shared/auth/user-info/user-info.service';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { SnackBarService } from 'src/app/_snackBar/snack-bar.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  loginForm!: FormGroup;
  constructor(private route: ActivatedRoute, private userInfoService: UserInfoService,
    private careerStateService: CareerStateService, private authServices: AuthService,
    private router: Router, private headerTitleService: HeaderTitleService,
    private snackBarServices:SnackBarService) {

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
      // username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      username: new FormControl('', [Validators.required]),
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
            }else if(responce.roles[0]=='ROLE_HRADMIN'){
            this.headerTitleService.updateMenuBar(false);
            this.router.navigate(['/employeeMgnmt/employee-list-view']);
            this.router.navigate(['/examPortal/collageList']);
          }
            else{
              this.headerTitleService.updateMenuBar(true);
              this.router.navigate(['pages/home'])
            }
            // this.careerStateService.data.subscribe((res: any) => {

            //   if (res.file != null || res.finalObject != null) {
            //     this.router.navigate([res.nav]);
            //   } else {
            //     this.router.navigate(['pages/home'])
            //   }

            // });
            this.snackBarServices.openSnackBarFrSuccess('Login successful....')

          }

          if (responce.error === "Unauthorized") {
            alert('Unauthorized')
          }


        },
        (error: any) => {
          this.snackBarServices.openSnackBarWarning('Wrong user name or password')
        }
      )
    }


  }

}
