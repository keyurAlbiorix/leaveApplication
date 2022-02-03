import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddleaveService {

  constructor(public http: HttpClient) { }


  addLeave(credentials) {
    
    return this.http.post(`${environment.apiUrl}leaveManagement/addLeave`,credentials);
   }
   getLeave(){
    return this.http.get(`${environment.apiUrl}leaveManagement/leaves`);
   }
   deleteLeave(id){
    return this.http.delete(`${environment.apiUrl}leaveManagement/deleteLeave`,id);
   }
}
