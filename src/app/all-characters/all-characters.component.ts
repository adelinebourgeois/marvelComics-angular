import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../service/marvel.service";

@Component({
  selector: 'comic-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {
    public characters = [];

    constructor(private marvelService: MarvelService) { }

    ngOnInit() {
        this.marvelService.getAllCharacters().subscribe(characters => this.characters = characters);
    }

}
