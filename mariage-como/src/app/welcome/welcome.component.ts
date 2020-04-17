import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
