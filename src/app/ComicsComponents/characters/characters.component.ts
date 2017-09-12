import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../shared/service/marvel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'comic-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
    public characters = [];
    public id: number;

    constructor( private marvelService: MarvelService, private route: ActivatedRoute)
    {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.marvelService.getComicDetailCharacters(this.id).subscribe(characters => this.characters = characters);
    }

}
