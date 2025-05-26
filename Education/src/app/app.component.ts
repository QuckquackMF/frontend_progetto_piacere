import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from './service';
import { JsonPipe } from '@angular/common'; // Import JsonPipe directly

@Component({
  selector: 'app-root',
  standalone: true, // Mark as a standalone component
  imports: [JsonPipe], // Import HttpClient and JsonPipe
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newdata: any;

  constructor(public _apiservice: ApiserviceService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._apiservice.getdata().subscribe((res) => {
      this.newdata = res;
    });
  }
}