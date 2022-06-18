import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsArticle } from "../../../interfaces/news"

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  homepageTextContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus necessitatibus sint qui. Ipsum, odit maiores. Dolor, sequi. Quidem minus, explicabo aliquid sapiente esse delectus cum! Sed est veritatis ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus necessitatibus sint qui. Ipsum, odit maiores. Dolor, sequi. Quidem minus, explicabo aliquid sapiente esse delectus cum! Sed est veritatis ullam!";

  sports: NewsArticle[] = [{ title: "Sport New 1", author: "Pravin", date: new Date().toISOString(), body: "Sports Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus necessitatibus sint qui. Ipsum, odit maiores. Dolor, sequi. Quidem minus, explicabo aliquid sapiente esse delectus cum! Sed est veritatis ullam!" }]
  science: NewsArticle[] = [
    {
      title: "Science  New 1",
      author: "Pravin",
      date: new Date().toISOString(),
      body: "Science Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus necessitatibus sint qui. Ipsum, odit maiores. Dolor, sequi. Quidem minus, explicabo aliquid sapiente esse delectus cum! Sed est veritatis ullam!"
    },
    {
      title: "Science  New 2",
      author: "Pravin",
      recommended: true,
      date: new Date().toISOString(),
      body: "Sciience Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus necessitatibus sint qui. Ipsum, odit maiores. Dolor, sequi. Quidem minus, explicabo aliquid sapiente esse delectus cum! Sed est veritatis ullam!"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}