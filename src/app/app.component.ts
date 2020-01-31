import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];

  ngOnInit(): void {
    this.data = sampleData;
  }
}
