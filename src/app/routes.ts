import {Routes} from "@angular/router";
import {ComicsComponent} from "./ComicsComponents/comics/comics.component";
import {ComicComponent} from "./ComicsComponents/comic/comic.component";
import {AllCharactersComponent} from "./CharactersComponents/all-characters/all-characters.component";
import {GraphicsNovelComponent} from "./GraphicsNovelComponenents/graphics-novel/graphics-novel.component";
import {GraphicNovelComponent} from "./GraphicsNovelComponenents/graphic-novel/graphic-novel.component";

export const routes: Routes = [
    {
        path: '', redirectTo: 'comics', pathMatch: 'full'
    },
    {
        path: 'comics',
        component: ComicsComponent
    },
    {
        path: 'graphics-novel',
        component: GraphicsNovelComponent
    },
    {
        path: 'graphic-novel/:id',
        component: GraphicNovelComponent
    },
    {
        path: 'comic/:id',
        component: ComicComponent
    },
    {
        path: 'characters',
        component: AllCharactersComponent
    },
];

