import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormBuilder } from '@angular/forms';
import {CalendarService} from '../calendar.service';
import {Event} from '../event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  Event = Event;
  events = this.calendarService.events;
  eventForm;


  constructor(private fb: FormBuilder, private calendarService: CalendarService) {
    this.eventForm = this.fb.group({
      title: '',
      date:''
    })

    const title = this.eventForm.get('title').value
    const date = this.eventForm.get('date').value
  }

  ngOnInit(): void {

  }

  addEvent(){
    const title = this.eventForm.get('title').value
    const date = this.eventForm.get('date').value

    this.calendarService.addToCalendar(this.Event);

    }

  }
