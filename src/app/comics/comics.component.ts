import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../service/marvel.service";


@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [MarvelService]
})
export class ComicsComponent implements OnInit {
  public comics = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getAllComics().subscribe(comics => this.comics = comics);
  }

}
