import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from '../pager.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  
  movieArray = [];
  public selectedGenre;
  selectedMoviesByGenre = [];
  genreName;
  hasGenre = false;
  pager: any = {};
  pagedItems: any[];

  constructor(private _movieServices: MovieService, 
              private activeRoute: ActivatedRoute,
              private pagerService: PagerService) {
  }

  

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.loadMovies(routeParams.id);
      
    });

  }

  loadMovies(id) {
    console.log('id', id);
    this.selectedGenre = id;

    this._movieServices.getMoviesByGenre(id).
      subscribe(data => {
        this.selectedMoviesByGenre = data.results;
        this.setPage(1);
      })
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.selectedMoviesByGenre.length, page);

    // get current page of items
    this.pagedItems = this.selectedMoviesByGenre.slice(this.pager.startIndex, this.pager.endIndex + 1);
} 
}
