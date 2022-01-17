import { catchError } from 'rxjs/operators';
import { CollageService } from './../collage.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollageResolver implements Resolve<any> {
  constructor(private collageServices:CollageService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   return this.collageServices.getCollageList().pipe(
     catchError(error=>{
     return of([])
     })
   )
  }
}
