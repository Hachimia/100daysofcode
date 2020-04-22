import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';
import { CalendarService } from '../calendar.service';
import { event } from '../event';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  eventDate = new Date();

  event = event;

  eventForm: FormGroup;

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  constructor(private fb: FormBuilder, private calendarService: CalendarService) {

  }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title : [],
      date: []
    });
  }

  faCheck = faCheck;
  faTrashAlt = faTrashAlt

  getEvent(): void {
    this.event = this.calendarService.getEvents();
  }



  /*addEvent(){
    const title = this.eventForm.get('title').value;
    const date = this.eventForm.get('date').value;

    document.getElementById('eventList').innerHTML += "Evénement : " + title + "<br>" + "Date : " + date + "<br>";
  }*/

}

