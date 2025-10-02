import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css'],
  imports: [FooterComponent]
})
export class NewsEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
