import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { routes } from './routes';

import { AppComponent } from './app.component';

import {MarvelService} from "./shared/service/marvel.service";

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComicsComponent } from './comicsComponents/comics/comics.component';
import { ComicComponent } from './comicsComponents/comic/comic.component';
import { StorieComponent } from './comicsComponents/storie/storie.component';
import { CharactersComponent } from './comicsComponents/characters/characters.component';
import { AllCharactersComponent } from './charactersComponents/all-characters/all-characters.component';
import { GraphicNovelsComponent } from './graphicNovelsComponents/graphic-novels/graphic-novels.component';
import { GraphicNovelComponent } from './graphicNovelsComponents/graphic-novel/graphic-novel.component';
import { GraphicNovelCharactersComponent } from './graphicNovelsComponents/graphic-novel-characters/graphic-novel-characters.component';
import {LoaderComponent} from "./shared/loader/loader.component";




@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicComponent,
    StorieComponent,
    CharactersComponent,
    AllCharactersComponent,
    NavbarComponent,
    GraphicNovelsComponent,
    GraphicNovelComponent,
    GraphicNovelCharactersComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    NgxPaginationModule,

  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
