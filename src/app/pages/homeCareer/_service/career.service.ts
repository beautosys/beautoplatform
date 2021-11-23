import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators';
import { CareerJob } from '../_model/careers';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }


  listofJobDetails():Observable<CareerJob[]>{
    // let userInfo,httpOptions;
    // if (localStorage.getItem('userInfo') != null) {
    //   let a:any=localStorage.getItem('userInfo');
    //   userInfo=JSON.parse(a);
    // }

    // if(userInfo!=undefined){
    //   if (userInfo.accessToken != null) {
    //     httpOptions = {
    //       headers: new HttpHeaders({
    //         'Access-Control-Allow-Origin':'*',
    //         'Content-Type':  'application/json',
    //         'Authorization': 'Bearer ' + userInfo.accessToken
    //       })
    //     }
     
    //   }

    // }

    return this.http.get<CareerJob[]>(environment.listofJobDetails).pipe(
      map((response:CareerJob[])=>{
        for(let i in response){
          response[i].department=response[i].department.departmentName;
          response[i].designation=response[i].designation.designationName;
          response[i].action='';
        }
        return response;
      })
    )
  }

  uploadFile(file:File, data:any){
    let formData = new FormData();
    formData.append("file", file);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("dob", data.dob);
    formData.append("department", data.department);
    formData.append("openPosition", data.openPosition);
    formData.append("emailId", data.emailId);
    formData.append("moblieNumber", data.moblieNumber.toString());
    formData.append("jobId", data.jobId.toString());
    return this.http.post(environment.submitJobApplication, formData)
  }

}
