import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormBuilder } from '@angular/forms';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  events = this.calendarService.events;
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private calendarService: CalendarService) {

  }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title : [],
      date: []
    });
  }

  addEvent(){
    /*const title = this.eventForm.get('title').value;
    const date = this.eventForm.get('date').value;
    console.log(title + date );*/
    this.calendarService.addToCalendar(Event);
  }

  


}
