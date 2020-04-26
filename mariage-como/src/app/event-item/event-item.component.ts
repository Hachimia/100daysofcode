import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormArray, FormGroup, FormBuilder } from '@angular/forms';
import {CalendarService} from '../calendar.service';



@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private calendarService: CalendarService) {

  }

  event = this.calendarService.events;

  ngOnInit(): void {
    
  }

  eventStyle: string;

  pastEvent(){
    this.eventStyle = "event-item-disabled"

  }

  faCheck = faCheck;
  faTrashAlt = faTrashAlt

}
