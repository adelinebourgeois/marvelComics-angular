import { Component, OnInit } from '@angular/core';
import {MarvelService} from '../../shared/service/marvel.service';

@Component({
  selector: 'app-graphic-novel',
  templateUrl: './graphic-novels.component.html',
  styleUrls: ['./graphic-novels.component.scss']
})
export class GraphicNovelsComponent implements OnInit {
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
