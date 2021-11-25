import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { countryCode } from 'src/app/shared/mocks/country';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { BASE_URL } from 'src/environments/environment.prod';
import { AdminClientsService } from './services/admin-clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  // displayedColumns: string[] = ['Id', 'ClientName','Director', 'Description','ClientStatus','Displaystatus','Document','Action'];
  // displayedColumns: string[] = ['id', 'clientName', 'director_1', 'director_2', 'contactPerson', 'contactPersonEmailId',
  // 'contactPersonRole', 'secondaryContactPerson', 'secondaryContactPersonEmailid', 'secondaryContactPersonRole',
  // 'address', 'country', 'phoneNo', 'description', 'clientStatus', 'displaystatus', 'document', 'action'];
  displayedColumns: string[] = ['id', 'clientName', 'director_1', 'description', 'clientStatus', 'displaystatus', 'document', 'action'];
  dataSource : any;
  sortedData: any;
  clientName:string='';
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  data:any;

  constructor( private headerTitleService:HeaderTitleService,private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar,public dialog: MatDialog, private adminClientsService:AdminClientsService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.data=response.clients;
      this.dataSource =new MatTableDataSource<any>(response.clients);
      this.sortedData=this.dataSource;

      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
    });
  }



  openClientDialog(data:any){

      const careerJobDialogRef = this.dialog.open(AdminAddClientsComponent, {
        width: '60vw',
          maxWidth: '60vw',
          panelClass: 'mobile-width',
        data: data
      });

      careerJobDialogRef.afterClosed().subscribe(result => {
        if(result!=undefined || result!=null){
        // if(result.code!='401'){
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
      panelClass: ['success-snackbar']
    });
    this.updateList();

  }

  updateList(){
    this.adminClientsService.clientsList().subscribe(
      response=>{

        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
       }
    );
  }


  openDeleteDialog(data:any){

       const deleteJobDialogRef = this.dialog.open(ClientDeleteDialogComponent, {
         width: '40vw',
           maxWidth: '40vw',
         data: data
       });

       deleteJobDialogRef.afterClosed().subscribe(result => {

         if(result!=undefined || result!=null ){
         // if(result.code!='401'){
          // this.deleteJob(data)
           this.openMessage(result.msg);

         // }
         }
       });

   }


}

@Component({
  selector: 'add-client-dialog',
  templateUrl: './admin-add-clients.component.html',
  styleUrls: ['./admin-add-clients.component.scss'],
})
export class AdminAddClientsComponent implements OnInit{
  submitted:boolean=false;
  clientForm: FormGroup;
  countries:Array<any>=[];
  file!:File;
  status=['ACTIVE','INACTIVE'];
  imageSrc:any;
  constructor( private adminClientsService:AdminClientsService,
     public careerJobDialogRef: MatDialogRef<AdminAddClientsComponent>,@Inject(MAT_DIALOG_DATA) public data: any){

    this.clientForm= new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      country: new FormControl('', [Validators.required]),
      desc: new FormControl('',[Validators.required]),
      displayStatus:new FormControl('' ),
      clientStatus:new FormControl('' ),
      phoneNo:new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      address:new FormControl('', [Validators.required]),
      contactPerson:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      contactPersonRole:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      contactPersonEmailId:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      secondaryContactPerson:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      secondaryContactPersonRole:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      secondaryContactPersonEmailid:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      director_1:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      director_2:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      file:new FormControl('', [Validators.required]),
    })

  }

  ngOnInit():void{
    this.countries=countryCode;

    if(this.data!=null){

      this.clientForm.setValue({
        name: this.data.clientName,
        country: this.data.country,
        desc: this.data.description,
        displayStatus:this.data.displaystatus,
      clientStatus:this.data.clientStatus,
      phoneNo:this.data.phoneNo,
      address:this.data.address,
      contactPerson:this.data.contactPerson,
      contactPersonRole:this.data.contactPersonRole,
      contactPersonEmailId:this.data.contactPersonEmailId,
      secondaryContactPerson:this.data.secondaryContactPerson,
      secondaryContactPersonRole:this.data.secondaryContactPersonRole,
      secondaryContactPersonEmailid:this.data.secondaryContactPersonEmailid,
      director_1:this.data.director_1,
      director_2:this.data.director_2,
      file: this.data.document
     });
     this.imageSrc=BASE_URL+this.data.document.fileUrl.substring(1)
    }else{
     this.imageSrc=''
    }

  }

  get clientFormControl(){
    return this.clientForm.controls;
  }

  onFileChange(event: any){
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
  }
  }


  onSubmit(){
this.submitted=true;

    if (this.clientForm.valid) {

      if(this.data!=null){

        this.adminClientsService.updateClient(this.clientForm.value).subscribe(
          response=>{
            this.careerJobDialogRef.close({code:response.code, msg:response.message,});
          }
        );
      }else{

        this.adminClientsService.addClient(this.file,this.clientForm.value).subscribe(
          response=>{
            this.careerJobDialogRef.close({code:response.code, msg:response.message,});
          }
        );
      }

    }
  }


  onChangeCountry(e:any){
    this.clientForm.get('country')?.patchValue(e.value);
  }

  onChangeClientStatus(e:any){
    this.clientForm.get('clientStatus')?.patchValue(e.value);
  }


}

@Component({
  selector: 'client-delete-dialog',
  templateUrl: './client-delete-dialog.component.html',
  styleUrls: ['./client-delete-dialog.component.scss'],
})
export class ClientDeleteDialogComponent  {
  constructor( private adminClientsService:AdminClientsService, public deleteJobDialogRef: MatDialogRef<AdminAddClientsComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
  }

  onNo(){
    this.deleteJobDialogRef.close();
  }

  onYes(){
    this.adminClientsService.deleteClient(this.data.clientName).subscribe(
      response=>{
        this.deleteJobDialogRef.close({code:response.code, msg:response.errorMessage,});
      }
    );
  }
}
