import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: any):Observable<any> {
    // return this.http.post<any>(`${environment.apiUrl}leaveManagement/login`,credentials);
    return this.http.post(`${environment.apiUrl}leaveManagement/login`,credentials)
      .pipe(map((res: any) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
      )
  }
}
