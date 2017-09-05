import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../service/marvel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'graphic-novel-characters',
  templateUrl: './graphic-novel-characters.component.html',
  styleUrls: ['./graphic-novel-characters.component.scss']
})
export class GraphicNovelCharactersComponent implements OnInit {
    public characters = [];
    public id: number;

    constructor( private marvelService: MarvelService, private route: ActivatedRoute)
    {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.marvelService.getGraphicNovelDetailCharacters(this.id).subscribe(characters => this.characters = characters);
    }

}
