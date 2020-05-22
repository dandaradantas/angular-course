import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

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
  public maxDate: Date = new Date();

  pipe = new DatePipe('en-US');

  calendarConfig;
  calendarID;
  startDate;

  /* Events variables */
  eventsList = null;
  eventsQtd;

  /* Pagination variables */
  page = 1;
  itemsPerPage = 10; 
  pageSizeOptions = [10, 20, 50, 100];
  pageEvent: PageEvent;

  constructor(private api: ApiService) {
   }

  getCalendarConfig() {
    this.api.getCalendarSettings()
      .subscribe(response => {
         this.calendarConfig = response.data; 
         this.calendarID = response.data.id;
      })
  }

  paginationHandler(event) {
    this.page = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.getEvents();
  }

  getEvents() {
    this.api.getEventsListByStartDate(this.calendarID, this.startDate, this.page, this.itemsPerPage)
       .subscribe(response => {
        
        this.eventsList = response.data.items;
        this.eventsQtd = response.data.total;
      })
  }

  changeStartDateHandler(event) {
    this.startDate = this.pipe.transform(event.value, 'yyyy-MM-dd');
    this.getEvents();
  }

  ngOnInit(): void {
    this.getCalendarConfig();
  }

}
