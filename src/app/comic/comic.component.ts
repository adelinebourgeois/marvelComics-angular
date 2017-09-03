import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MarvelService} from "../service/marvel.service";


@Component({
  selector: 'comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  public comic = [];
  public id: number;

  constructor(private marvelService: MarvelService, private route: ActivatedRoute) {
      this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.marvelService.getComicDetail(this.id).subscribe(comic => this.comic = comic);
  }
}
