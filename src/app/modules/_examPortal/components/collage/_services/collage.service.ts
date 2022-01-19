import { DeleteCollageDetailsComponent } from './../delete-collage-details/delete-collage-details.component';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollageService {
  getCountryList() {
    throw new Error('Method not implemented.');
  }
  getStateList() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getCollageList():Observable<any>{
    return this.http.get(environment.getAllCollageListRecords)
  }

  deleteCollageDetails(collegeName:any):Observable<any>{ 
    return this.http.delete(environment.deleteCollageListRecordBYID+`?collegeName=${collegeName}`);
  }


  viewMoreOfCollage(collegeName:any){
    return this.http.get(environment.getCollageListRecordBYID+`?collegeName=${collegeName}`);


  }
  addCollageDetails(data:any){
    return this.http.post(environment.addCollageRecords,data);
  }



  getUniversity(){

    return this.http.get(environment.getuniversityList);

  }

  uploadCollageLogo(file:File,data:any){

     let formData = new FormData();
    formData.append("file", file);
    formData.append("collegeLogo", data.collegeLogo);
    formData.append("collegeId", data.collegeId);
    formData.append("name", data.name);
   
    return this.http.post(environment.uploadCollageLogo, formData)
  }

  temparorySaveCollageData(data:any){
    return this.http.post(environment.saveCollageTemparory,data);

  }

}
