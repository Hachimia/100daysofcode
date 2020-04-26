import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  events = [{
    title: 'Henné',
    date: '2020-06-02'
    },
    {
    title: 'Mariage civil',
    date: '2020-05-10'
    },
    {
    title: 'Oukoumbi',
    date: '2020-07-10'
    }];

  //Add an event at calendar
  addToCalendar(event){
    this.events.push(event);
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
