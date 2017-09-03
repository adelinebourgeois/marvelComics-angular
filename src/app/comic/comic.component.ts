import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../service/marvel.service";
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  public comic = [];
  public characters = [];
  public id: number;

  constructor(
      private marvelService: MarvelService,
      private route: ActivatedRoute
  ) {
    this.id = route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.marvelService.getComicDetail(this.id).subscribe(comic => this.comic = comic);
    this.marvelService.getComicDetailCharacters(this.id).subscribe(characters=> this.characters = characters);

  }

}
