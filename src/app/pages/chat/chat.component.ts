import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatResponse {
  // Define la estructura de la respuesta esperada aquí
  id: number;
  question: string;
  response: string;
  // Otros campos según tu API
}


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  classId: string | null = null;
  chatData:ChatResponse[] = [];
  activeInput = true;

  textChat = "";
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = params.get('id');
      this.chatService.getChatData(this.classId).subscribe(data => {
        this.chatData = data;
        console.log(this.chatData);
      }, error => {
        console.error('Error fetching data', error);
      });
    });
  }

  sendMessage() {
    console.log("hola")
    this.chatService.postChatData(this.classId, this.textChat).subscribe((data: ChatResponse)  => {
      this.chatData.push(data)
      this.textChat = "";
    }, error => {
        console.error('Error fetching data', error);
    });
  }
}
