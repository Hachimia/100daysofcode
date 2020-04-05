import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

