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
import { StorieComponent } from './storie/storie.component';
import { CharactersComponent } from './characters/characters.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicComponent,
    StorieComponent,
    CharactersComponent,
    AllCharactersComponent,
    NavbarComponent,
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
