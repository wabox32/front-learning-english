import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  
  private apiUrl = 'http://127.0.0.1:8086/classes';

  constructor(private http: HttpClient) { }

  getClassData(id: string | null ): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
