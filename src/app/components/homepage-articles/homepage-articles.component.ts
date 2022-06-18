import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'src/interfaces/news';

@Component({
  selector: 'app-homepage-articles',
  templateUrl: './homepage-articles.component.html',
  styleUrls: ['./homepage-articles.component.scss']
})
export class HomepageArticlescomponent implements OnInit {

  @Input() articles : NewsArticle[] = [];

  constructor() { 
    console.log(this.articles)
  }

  ngOnInit(): void {
    console.log(this.articles)
  }

  titleClick(title: string){
    alert(title)
  }
}
