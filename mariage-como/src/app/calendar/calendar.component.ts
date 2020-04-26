import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, NgForm, FormBuilder } from '@angular/forms';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

constructor(private calendarService: CalendarService) {

}

events = this.calendarService.events;


  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  ngOnInit(): void {

  }

}

