import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mainUrl = 'https://timelyapp.time.ly/api/calendars/';
  urlParam = 'https://calendar.time.ly/ficceyp4';
  params = new HttpParams();

  constructor(private http: HttpClient) { }

  getCalendarSettings(): Observable<any> {
    return this.http.post(this.mainUrl + 'info', {"url": this.urlParam});
  }

  getEventsList(calendarId): Observable<any> {
    return this.http.get(this.mainUrl + calendarId + '/events');
  }

  getEventsListByStartDate(calendarId, startDate): Observable<any> {
    this.params.append('start_date', startDate);
    return this.http.get(this.mainUrl + calendarId + '/events', {params: this.params});
  }
}
