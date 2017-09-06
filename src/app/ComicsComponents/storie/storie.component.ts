import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../service/marvel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'comic-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.scss']
})
export class StorieComponent implements OnInit {
    public stories = [];
    public id: number;

    constructor(private marvelService: MarvelService, private route: ActivatedRoute)
    {
        this.id = route.snapshot.params['id'];
    }

  ngOnInit() {
      this.marvelService.getComicDetailStories(this.id).subscribe(stories => this.stories = stories);
  }

}
