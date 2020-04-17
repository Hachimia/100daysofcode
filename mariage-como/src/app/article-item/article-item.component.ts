import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() articleTitle: string
  @Input() articleContent: string
  @Input() articleAuthor: string
  @Input() articleDate: Date
 
  constructor() { }

  ngOnInit(): void {
  }

}
