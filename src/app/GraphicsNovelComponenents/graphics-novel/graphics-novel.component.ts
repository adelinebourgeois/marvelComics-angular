import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../service/marvel.service";

@Component({
  selector: 'app-graphic-novel',
  templateUrl: './graphics-novel.component.html',
  styleUrls: ['./graphics-novel.component.scss']
})
export class GraphicsNovelComponent implements OnInit {
    public graphics = [];
    loading: boolean = false;
    p: number = 1;

    constructor(private marvelService: MarvelService) { }

    ngOnInit() {
        this.loading = true;
        this.marvelService.getAllGraphicNovel().subscribe(graphics => {
            this.graphics = graphics;
            this.loading = false;
        }, () => this.loading = false);
    }

}
