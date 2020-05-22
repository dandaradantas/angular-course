import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../api.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public value: Date = new Date();
  public minDate: Date = new Date();
  public maxDate: Date = new Date(this.fullYear, 8, 15);

  pipe = new DatePipe('en-US');

  calendarConfig;
  calendarID;
  eventsList;

  constructor(private http: HttpClient,
              private api: ApiService) {
   }

   getCurrentMonth(event) {
    console.log('event', event);
  }

  getCalendarConfig() {
    this.api.getCalendarSettings()
      .subscribe(response => {
         this.calendarConfig = response.data; 
         this.calendarID = response.data.id;
      })
  }

  getEvents(event) {
    let startDate = this.pipe.transform(event.value, 'yyyy-MM-dd');
    this.api.getEventsListByStartDate(this.calendarID, startDate)
      .subscribe(response => {
        this.eventsList = response.data.items;
      })
  }

  getImage(imageSrc) {
    console.log('entrou', imageSrc[0].small.url);
    return imageSrc[0].small.url;
  }

  ngOnInit(): void {
    this.getCalendarConfig();
  }

}
