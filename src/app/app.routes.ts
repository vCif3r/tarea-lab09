import { Routes } from '@angular/router';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaPeliculasComponent,
        title: 'Lista'
    }
];
