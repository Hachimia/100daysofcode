import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

onSubmit(f: NgForm) {
    console.log(f.value);
  }

  event = {
    name: String,
    date: Date
  };

  events: any [];

 
  constructor() { 
  }

  onAdd(e: NgForm) {
    console.log(e.value);
    document.getElementById('eventList').innerHTML += e.value;

  }

  ngOnInit(): void {
  }
    
 
}

