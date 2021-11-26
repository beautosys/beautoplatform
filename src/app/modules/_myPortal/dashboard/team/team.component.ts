import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from 'src/app/theme/header/header-title.service';
import { BASE_URL } from 'src/environments/environment.prod';
import { AdminAddClientsComponent } from '../clients/clients.component';
import { TeamMember } from './model/team-member';
import { AdminTeamService } from './services/admin-team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit, AfterViewInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top'
  displayedColumns: string[] = ['empidID', 'name', 'designation', 'department','linkdinUrl','info','action'];
  // columnsToDisplay: string[] = ['jobID', 'department', 'openPosition', 'location','qualification','keySkillSets','experienceLevel','noOfResources','salaryRange','jobDescription','details','info','action'];
  dataSource : any;
  sortedData: any;
  dept:Array<any>=[];
  desg:Array<any>=[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  data:any;
  constructor(private headerTitleService:HeaderTitleService,private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar,public dialog: MatDialog, private adminTeamService:AdminTeamService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.data=response.adminteam.teamMembersList;
      this.dataSource =new MatTableDataSource<TeamMember[]>(response.adminteam.teamMembersList);
      this.sortedData=this.dataSource;
      this.dept=response.adminteam.getDepartmentList;
      this.desg=response.adminteam.getDesignationList;
      this.headerTitleService.updatedTitle(response.title);
      this.headerTitleService.updatedStart(response.start);
    });
  }

  openAddUpdateTeamMemberDialog(teamMemberInfo:any){
       const addUpdateTeamMemberJobDialogRef = this.dialog.open(AddUpdateTeamMemberComponent, {
         width: '60vw',
           maxWidth: '60vw',
          panelClass: 'mobile-width',
         data: {dept:this.dept,desg:this.desg, teamMemberInfo:teamMemberInfo}
       });

       addUpdateTeamMemberJobDialogRef.afterClosed().subscribe(result => {
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
     this.adminTeamService.teamMembersList().subscribe(
       response=>{
         this.dataSource = new MatTableDataSource<any>(response);
         this.dataSource.paginator = this.paginator;
        }
     );
   }

   openDeleteDialog(data:any){

        const deleteJobDialogRef = this.dialog.open(TeamMemberDeleteDialogComponent, {
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

    filterTable(event: any) {

      let filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


 }

 @Component({
   selector: 'add-update-team-member-dialog',
   templateUrl: './add-update-team-member.component.html',
   styleUrls: ['./add-update-team-member.component.scss'],
 })
 export class AddUpdateTeamMemberComponent implements OnInit{
   submitted:boolean=false;
   addUpdateTeamMemberForm: FormGroup;
   dept:Array<any>=[];
   desg:Array<any>=[];
   file!:File;
   imageSrc:any;
   constructor( private adminTeamService:AdminTeamService, public addUpdateTeamMemberJobDialogRef: MatDialogRef<AddUpdateTeamMemberComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
     this.dept=data.dept;
     this.desg=data.desg;

     this.addUpdateTeamMemberForm= new FormGroup({
       empidID: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
       name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
       designation:new FormControl('', [Validators.required]),
       department: new FormControl('', [Validators.required]),
       linkdinUrl: new FormControl('',[Validators.required,Validators.pattern('^(https?:\/\/)?((w{3}\.)?)linkedin.com\/.*')]),
       facebookUrl:new FormControl('', [Validators.required,Validators.pattern('^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*')]),
       intsagramUrl:new FormControl('', [Validators.required,Validators.pattern('^(https?:\/\/)?((w{3}\.)?)instagram.com\/.*')]),
       tweeterUrl:new FormControl('', [Validators.required,Validators.pattern('^(https?:\/\/)?((w{3}\.)?)twitter.com\/.*')]),
       youtubeUrl:new FormControl('', [Validators.required,Validators.pattern('^(https?:\/\/)?((w{3}\.)?)youtube.com\/.*')]),
       info:new FormControl('', [Validators.required]),
       document:new FormControl('', [Validators.required]),
     })

    }

   ngOnInit():void{
     if(this.data.teamMemberInfo!=null){
       this.addUpdateTeamMemberForm.setValue({
        empidID:this.data.teamMemberInfo.empidID,
        name:this.data.teamMemberInfo.name,
        designation:this.data.teamMemberInfo.designation,
        department: this.data.teamMemberInfo.department,
        linkdinUrl: this.data.teamMemberInfo.linkdinUrl,
        facebookUrl: this.data.teamMemberInfo.facebookUrl,
        intsagramUrl:this.data.teamMemberInfo.intsagramUrl,
        tweeterUrl:this.data.teamMemberInfo.tweeterUrl,
        youtubeUrl:this.data.teamMemberInfo.youtubeUrl,
        info:this.data.teamMemberInfo.info,
        document:this.data.teamMemberInfo.document
      });
      this.imageSrc=BASE_URL+this.data.teamMemberInfo.document.fileUrl.substring(1)
     }else{
      this.imageSrc=''
     }
   }

   get addUpdateTeamMemberFormControl(){
     return this.addUpdateTeamMemberForm.controls;
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
     if (this.addUpdateTeamMemberForm.valid) {
       if(this.data.teamMemberInfo!=null){

         console.log(this.addUpdateTeamMemberForm.value);
         let data = {
          empidID: this.addUpdateTeamMemberForm.value.empidID,
          name:this.addUpdateTeamMemberForm.value.name,
          designation:this.addUpdateTeamMemberForm.value.designationName,
          department:this.addUpdateTeamMemberForm.value.departmentName,
          facebookUrl:this.addUpdateTeamMemberForm.value.facebookUrl,
          tweeterUrl:this.addUpdateTeamMemberForm.value.tweeterUrl,
          intagramUrl:this.addUpdateTeamMemberForm.value.intsagramUrl,
          youtubeUrl:this.addUpdateTeamMemberForm.value.youtubeUrl,
          linkdinUrl:this.addUpdateTeamMemberForm.value.linkdinUrl,
          info:this.addUpdateTeamMemberForm.value.info ,
          document:this.file
          }

         this.adminTeamService.updateTeamMember(data).subscribe(
           response=>{
             this.addUpdateTeamMemberJobDialogRef.close({code:response.code, msg:response.message,});
           }
         );
       }else{
         this.adminTeamService.addTeamMember(this.file,this.addUpdateTeamMemberForm.value).subscribe(
           response=>{

             this.addUpdateTeamMemberJobDialogRef.close({code:response.code, msg:response.message,});
           }
         );
       }

     }
   }

   onChangeDepartment(e:any){

     this.addUpdateTeamMemberForm.get('department')?.patchValue(e.value);
   }

   onChangePosition(e:any){
     this.addUpdateTeamMemberForm.get('designation')?.patchValue(e.value);
   }


 }

 @Component({
   selector: 'team-member-delete-dialog',
   templateUrl: './team-member-delete-dialog.component.html',
   styleUrls: ['./team-member-delete-dialog.component.scss'],
 })
 export class TeamMemberDeleteDialogComponent  {
   constructor( private adminCareerService:AdminTeamService, public deleteJobDialogRef: MatDialogRef<AdminAddClientsComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
   }

   onNo(){
     this.deleteJobDialogRef.close();
   }

   onYes(){
     this.adminCareerService.deleteTeamMember(this.data.empidID).subscribe(
       response=>{
         this.deleteJobDialogRef.close({code:response.code, msg:response.errorMessage,});
       }
     );
   }
 }

