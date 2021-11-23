import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BASE_URL} from 'src/environments/environment.prod';
import { AdminClients } from '../model/admin-clients';

@Injectable({
  providedIn: 'root'
})
export class AdminClientsService {

  constructor(private http:HttpClient) { }
  clientsList():Observable<AdminClients[]>{
    return this.http.get<AdminClients[]>(environment.clientAdminList).pipe(
      map((response:AdminClients[])=>{
        for(let i in response){
          response[i].action='';
          response[i].document.fileUrl=BASE_URL+response[i].document.fileUrl.substring(1);
        }
        return response;
      })
    )
  }


  // addClient(body:any):Observable<any>{
  //   return this.http.post(environment.clientRegistration,body);
  // }

  addClient(file:File, data:any):Observable<any>{
    let formData = new FormData();
    formData.append("companylogo", file);
    formData.append("name", data.name);
    formData.append("country", data.country);
    formData.append("desc", data.desc);
    formData.append("phoneNo", data.phoneNo+'');
    formData.append("address", data.address);
    formData.append("contactPerson", data.contactPerson);
    formData.append("contactPersonRole", data.contactPersonRole);
    formData.append("contactPersonEmailId", data.contactPersonEmailId);
    formData.append("secondaryContactPerson", data.secondaryContactPerson);
    formData.append("secondaryContactPersonRole", data.secondaryContactPersonRole);
    formData.append("secondaryContactPersonEmailid", data.secondaryContactPersonEmailid);
    formData.append("director1", data.director_1);
    formData.append("director2", data.director_2);
    return this.http.post(environment.clientRegistration, formData)
  }


  updateClient(body:any):Observable<any>{   
    return this.http.post(environment.clientUpdate,body);
  }

  deleteClient(clientName:any):Observable<any>{ 
    return this.http.delete(environment.clientDelete+`?clientName=${clientName}`);
  }

}
