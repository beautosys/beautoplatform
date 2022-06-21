import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryStateService {

  constructor(private http:HttpClient) { }



  
  getCountryList(){
    return this.http.get(environment.getCountryList);

  }

  getStateList(){
    return this.http.get(environment.getStateList);

  }


  getStateBySelectCountry(countryName:any){
    debugger
    return this.http.get(environment.getStateBySelctCountry+ `?countryName=${countryName}`);
    
  }
}
