import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

const API_KEY  = '21f0bf9892b55aad85f559b5c9cb990d'; 

const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
                + API_KEY
                + '&language=en-US';

@Injectable()
export class MovieService {
  _http:HttpClient;
  _movieArray: Array<any>;
  today;

  constructor(private http: HttpClient) { 
    this._http =  http;
    this.today = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

  getGenres() {
    return this._http.get<any>(GENRE_URL);
  }

  getMoviesByGenre(id) {
    return this._http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY + '&with_genres=' + id + '')
  }
}
