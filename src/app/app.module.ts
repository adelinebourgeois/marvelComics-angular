import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { routes } from './routes';

import { AppComponent } from './app.component';

import {MarvelService} from "./service/marvel.service";

import { NavbarComponent } from './navbar/navbar.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';
import { StorieComponent } from './storie/storie.component';
import { CharactersComponent } from './characters/characters.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { GraphicsNovelComponent } from './graphics-novel/graphics-novel.component';
import { GraphicNovelComponent } from './graphic-novel/graphic-novel.component';
import { GraphicNovelCharactersComponent } from './graphic-novel-characters/graphic-novel-characters.component';


@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicComponent,
    StorieComponent,
    CharactersComponent,
    AllCharactersComponent,
    NavbarComponent,
    GraphicsNovelComponent,
    GraphicNovelComponent,
    GraphicNovelCharactersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    NgxPaginationModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
