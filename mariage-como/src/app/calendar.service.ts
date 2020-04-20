import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  events = [];

  //Add an event at calendar
  addToCalendar(event){
    this.events.push(event);
  }

  //Return events of array
  getEvents(){
    return this.events;
  }

  //Deleting the last event entered
  deleteOfCalendar(){
    this.events.pop();
  }

  constructor() { }
}
