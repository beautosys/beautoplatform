import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminContactUsService } from './services/admin-contact-us.service';
import { ContactUs } from './model/contact-us.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  displayedColumns: string[] = ['id', 'name', 'email', 'contact_no','message','action'];
  dataSource : any;

  constructor(private headerTitleService:HeaderTitleService,private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar,public dialog: MatDialog, private adminContactUsService:AdminContactUsService) { }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      (response);
      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
      if(response.messages.length!=0)
        this.dataSource = new MatTableDataSource<ContactUs[]>(response.messages);
      else
        this.dataSource=[];
    });

  }

  openDeleteDialog(data:any){

    (data);
       const deleteJobDialogRef = this.dialog.open(DeleteContactUsComponent, {
         width: '40vw',
           maxWidth: '40vw',
         data: data
       });

       deleteJobDialogRef.afterClosed().subscribe(result => {
        (result);
         if(result!=undefined || result!=null ){
         // if(result.code!='401'){
          // this.deleteJob(data)
           this.openMessage(result.msg);

         // }
         }
       });

   }

  openMessage(msg:string) {
    this._snackBar.open(msg,'' ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
    this.updateList();

  }

  updateList(){
    this.adminContactUsService.getContactUsList().subscribe(
      (response:ContactUs[])=>{
        this.dataSource = new MatTableDataSource<any>(response); 
        this.dataSource.paginator = this.paginator;
       }
    );
  }


  // deleteJob(data:any){
  //   (data);
  //   this.adminContactUsService.deleteContactUsMessage(data.id).subscribe(
  //     response=>{
  //       this.openMessage(response.errorMessage);
  //     }
  //   );
  // }

  openViewDialog(e:any){

  }

  filterTable(event: any) {

    let filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

@Component({
  selector: 'delete--contact-us-dialog',
  templateUrl: './delete-contact-us.component.html',
  styleUrls: ['./delete-contact-us.component.scss'],
})
export class DeleteContactUsComponent  {
  constructor( private adminContactUsService:AdminContactUsService, public deleteJobDialogRef: MatDialogRef<DeleteContactUsComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
  }

  onNo(){
    this.deleteJobDialogRef.close();
  }

  onYes(){
    this.adminContactUsService.deleteContactUsMessage(this.data.id).subscribe(
      response=>{
        this.deleteJobDialogRef.close({code:response.code, msg:response.errorMessage,});
      }
    );
  }


}
