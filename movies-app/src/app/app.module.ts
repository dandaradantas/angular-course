import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service'
import { AppRoutingModule } from './app-routing.module';
import { GenresComponent } from './genres/genres.component';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, GenresComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
    MatTabsModule, MatSelectModule, AppRoutingModule, MatCardModule, MatPaginatorModule
    ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


