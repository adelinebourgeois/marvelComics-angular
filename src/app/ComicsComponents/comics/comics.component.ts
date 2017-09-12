import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../shared/service/marvel.service';


@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  public comics = [];
  p: number = 1;
  loading: boolean = false;

  constructor(private marvelService: MarvelService) { }

  scroll() {
      window.scrollTo(0, 0);
  }

  ngOnInit() {
    this.loading = true;
    this.marvelService.getAllComics().subscribe(comics => {
      this.comics = comics;
      this.loading = false;
    }, () => this.loading = false);

  }

}
