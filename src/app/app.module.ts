import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';

import { routes } from './routes';

import { AppComponent } from './app.component';

import {MarvelService} from "./service/marvel.service";

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComicsComponent } from './ComicsComponents/comics/comics.component';
import { ComicComponent } from './ComicsComponents/comic/comic.component';
import { StorieComponent } from './ComicsComponents/storie/storie.component';
import { CharactersComponent } from './ComicsComponents/characters/characters.component';
import { AllCharactersComponent } from './CharactersComponents/all-characters/all-characters.component';
import { GraphicsNovelComponent } from './GraphicsNovelComponenents/graphics-novel/graphics-novel.component';
import { GraphicNovelComponent } from './GraphicsNovelComponenents/graphic-novel/graphic-novel.component';
import { GraphicNovelCharactersComponent } from './GraphicsNovelComponenents/graphic-novel-characters/graphic-novel-characters.component';
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
    GraphicsNovelComponent,
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
