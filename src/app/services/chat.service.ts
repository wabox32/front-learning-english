import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatResponse {
  // Define la estructura de la respuesta esperada aquí
  id: number;
  question: string;
  response: string;
  // Otros campos según tu API
}


@Injectable({
  providedIn: 'root'
})



export class ChatService {
    
  private apiUrl = 'http://127.0.0.1:8086/chats';

  constructor(private http: HttpClient) { }


  getChatData(id: string | null ): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  postChatData(id: string | null, question: string ): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/${id}`, { question: question});
  }
}
