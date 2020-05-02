import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
environment

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) { }
  getChartData() : Observable <any[]> {
     return this.http.get<any[]>(environment.apiURL+'/ColumnChartData');
  }
 
}
