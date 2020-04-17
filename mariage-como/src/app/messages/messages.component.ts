import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageForm = new FormGroup({
    title: new FormControl(''),
    message: new FormControl('')
  });

  sendMessage(){
    console.log(this.messageForm.value);
    alert('Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais. Mariage-Como')
  }

  constructor() { }

  ngOnInit(): void {
  }

  faPaperPlane = faPaperPlane;

}
