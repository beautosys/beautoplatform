import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/_core/components/_services/auth.service';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { ContactService } from './_service/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  submitted:boolean=false;
  contactUsForm:any;
  constructor(private contactService:ContactService,private route: ActivatedRoute, private headerTitleService:HeaderTitleService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactUsForm=new FormGroup({
      name: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email:new FormControl('', [Validators.required, Validators.email]),
      phone:new FormControl('', [Validators.required,Validators.pattern("^[0-9]{10}$")]),
      message:new FormControl('',Validators.required)
    });

    this.route.data.subscribe(data => {
      (data.title);
      this.headerTitleService.updatedTitle(data.title);
      this.headerTitleService.updatedStart(data.start);
  })
  }

  get contactUsFormControl(){
    return this.contactUsForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    var data = {
      name:this.contactUsForm.value.name,
      email:this.contactUsForm.value.email,
      contact_no:this.contactUsForm.value.phone,
      message:this.contactUsForm.value.message
    }
    if(this.contactUsForm.valid){
      this.contactService.contactUS(data).subscribe(
        response=>{
          this.openMessage(response.code);
        }
      );
      
    }
  }

  getDirection(){
    
  }

  openMessage(msg:string) {
    this._snackBar.open(msg,'' ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
}
