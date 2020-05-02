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

  //Validate event 
  eventPerformed(){
        var eventItem = document.getElementById('event-item');
        eventItem.style.backgroundColor += '#28A745';
        eventItem.style.textDecoration += 'line-through';
      }
  

  //Deleting the last event entered
  deleteOfCalendar(Event){
    for(let i = 0; i<= this.events.length; i++ ){
      if(Event == this.events[i]){
        this.events.splice(i,1)
      }
    }
  }

  constructor() { }
}
