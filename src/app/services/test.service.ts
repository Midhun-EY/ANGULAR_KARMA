import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class TestService {
  constructor() { }
  sampleFunction(data: object){
    return true
  }
  sampleFunction2(){
    return false
  }

//   getAll(): Observable<any> {
//     return  
//   }

}
