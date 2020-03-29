import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: any;

  constructor(private _movieServices: MovieService, 
    private router: Router) { }

  ngOnInit(): void {
    this._movieServices.getGenres()
      .subscribe(data => {
        this.genres = data.genres;
      },
      error => {
        console.log(error);
      });
  }

  onGenreChange(genre) {
    this.router.navigate(['/movies', genre]);
  }

}
