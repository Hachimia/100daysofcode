import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, NgForm, FormBuilder } from '@angular/forms';
import {CalendarService} from '../calendar.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

  faCheck = faCheck;
  faTrashAlt = faTrashAlt

  eventStyle: string;

  pastEvent(){
    console.log('Effectué ! ');
  }

}

