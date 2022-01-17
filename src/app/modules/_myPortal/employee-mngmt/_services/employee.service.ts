import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaderService } from 'src/app/modules/_core/components/_services/http-header.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,private header:HttpHeaderService) { }

  getEmployeeList(){
    
   return this.http.get(`${environment.getEmployee}`)
  }

  
}
