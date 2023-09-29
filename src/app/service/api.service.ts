import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //properties

  //constructors
  constructor(private http: HttpClient) {}

  //getters & setters

  //custom methods
  public get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}
