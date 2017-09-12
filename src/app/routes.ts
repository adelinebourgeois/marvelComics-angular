import {Routes} from '@angular/router';

import {ComicsComponent} from './comicsComponents/comics/comics.component';
import {GraphicNovelsComponent} from './graphicNovelsComponents/graphic-novels/graphic-novels.component';
import {GraphicNovelComponent} from './graphicNovelsComponents/graphic-novel/graphic-novel.component';
import {ComicComponent} from './comicsComponents/comic/comic.component';
import {AllCharactersComponent} from './charactersComponents/all-characters/all-characters.component';


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
        component: GraphicNovelsComponent
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

