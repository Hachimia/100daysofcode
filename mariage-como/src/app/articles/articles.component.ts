import { Component, OnInit } from '@angular/core';
import {articles} from '../articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = articles;

  constructor() { }

  ngOnInit(): void {
  }

}
