import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../service/marvel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-graphic-novel',
  templateUrl: './graphic-novel.component.html',
  styleUrls: ['./graphic-novel.component.scss']
})
export class GraphicNovelComponent implements OnInit {
    public graphic = [];
    public id: number;

    constructor(private marvelService: MarvelService, private route: ActivatedRoute) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.marvelService.getGraphicNovelDetail(this.id).subscribe(graphic => this.graphic = graphic);
    }

}
