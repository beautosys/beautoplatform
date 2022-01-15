import { DeleteCollageDetailsComponent } from './../delete-collage-details/delete-collage-details.component';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollageService {

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


  getCountryList(){
    return this.http.get(environment.getCountryList)

  }

}
