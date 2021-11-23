import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-welcome-to-employee-page',
  templateUrl: './welcome-to-employee-page.component.html',
  styleUrls: ['./welcome-to-employee-page.component.scss']
})
export class WelcomeToEmployeePageComponent implements OnInit {

  designation=['All','HR Finance','Jr Java Devloper','Frontend Devloper'];
  selectedDesignation='All';
  department=['All','HR','IT','Mech'];
  selectedDepartment='All';
  location=['All','Pune','Mumbai','Chennai','Bengleru'];
  selectedLocation='All';
  months=['January','February','March','April','May','June','July','August','September','October','November','December']
  selectedMonth='January';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddEmployeeDialog(data:any){

 
       const careerJobDialogRef = this.dialog.open(AddEmployeeComponent, {

        panelClass:'addempdialog',
        width:'30cm',
    
         
       });


   
       careerJobDialogRef.afterClosed().subscribe(result => {
         if(result!=undefined || result!=null){
         // if(result.code!='401'){
          
 
         // }
         }
       });
   
   }

   onChangeMonth(e:any){
    this.selectedMonth=e.value;
    (this.selectedMonth)
   }

   onChangeDept(e:any){
     this.selectedDepartment=e.value;
   }

   onChangeDes(e:any){
    this.selectedDesignation=e.value;
  }

  onChangeLocation(e:any){
    this.selectedLocation=e.value;
  }

}
