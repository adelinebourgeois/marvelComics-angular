import {Routes} from "@angular/router";
import {ComicsComponent} from "./comics/comics.component";
import {ComicComponent} from "./comic/comic.component";

export const routes: Routes = [
    {
        path: '', redirectTo: 'comics', pathMatch: 'full'
    },
    {
        path: 'comics',
        component: ComicsComponent
    },
    {
        path: 'comic/:id', component: ComicComponent
    }
];

