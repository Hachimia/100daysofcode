import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  eventForm: FormGroup;

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      title: [],
      date: []
    });

  }

  addEvent(){
    const title = this.eventForm.get('title').value;
    const date = this.eventForm.get('date').value;

    document.getElementById('eventList').innerHTML += "Evénement : " + title + "<br>" + "Date : " + date + "<br>";
  }


}

