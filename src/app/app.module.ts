import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import {MarvelService} from "./service/marvel.service";
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
