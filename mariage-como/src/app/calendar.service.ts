import { Injectable } from '@angular/core';
import { events } from './events';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  events = events;
  Event = Event;

  //Add an event at calendar
  addToCalendar(Event){
    this.events.push(Event);
  }

  //Return events of array
  getEvents(){
    return this.events;
  }

  //Deleting the last event entered
  deleteOfCalendar(event){
    for(let i = 0; i<= this.events.length; i++ ){
      if(event == this.events[i]){
        this.events.splice(i,1)
      }
    }
  }

  constructor() { }
}
