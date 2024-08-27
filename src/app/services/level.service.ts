import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private apiUrl = 'http://127.0.0.1:8086/levels';

  constructor(private http: HttpClient) { }


  getLevelData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
