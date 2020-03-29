import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';



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

  constructor(private _movieServices: MovieService, 
              private activeRoute: ActivatedRoute) {
  }

  

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.loadMovies(routeParams.id);
    });


    // let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    // this.selectedGenre = id;


    //location.reload(); 

      // this.activeRoute.params.subscribe((params) => {
      //   if(params['id']){
      //     this.hasGenre = true;
      //     const id = params['id'];
      //     this.genreName = params['name'];
      //     this._movieServices.getMoviesByGenre(id).subscribe(res => {
      //       this.selectedMoviesByGenre = res.results;
      //     });
      //   } 
        
      // })
  }

  loadMovies(id) {
    console.log('id', id);
    this.selectedGenre = id;

    this._movieServices.getMoviesByGenre(id).
      subscribe(data => {
        this.selectedMoviesByGenre = data.results;
      })
  }

}
