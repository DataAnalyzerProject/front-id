import { Component, OnInit } from '@angular/core';
import { RxStompService } from '../rx-stomp.service';
import { Message } from '@stomp/stompjs';
import {HttpClient, HttpParams} from "@angular/common/http";
@Component({
  selector: 'front-id-special-input',
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.scss']
})
export class SpecialInputComponent {
  receivedMessages: string[] = [];
  progress: number=0;
  getted: number=0;
  value: number=0;

  constructor(private rxStompService: RxStompService,private http: HttpClient) {}

  ngOnInit(): void {
    this.rxStompService.watch('/topic/progress').subscribe((message: Message) => {
      console.log(message.body)
      this.getted=Number(message.body)
      if(this.getted!=-1)this.value=this.getted
      this.receivedMessages.push(message.body);
      console.log(this.receivedMessages)
    });
  }

  onSendMessage() {
    const message = `Message generated at ${new Date()}`;
    this.rxStompService.publish({ destination: '/topic/progress', body: message });
  }

  sendNumber() {
    this.http.post(
      'http://localhost:8080/home/display',
      { number: this.value },
      {params:new HttpParams().set('number',this.value)}
    ).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
