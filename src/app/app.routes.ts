import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { SpellsComponent } from './components/spells/spells.component';
import { BooksComponent } from './components/books/books.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';

export const routes: Routes = [
    { path: 'app-login', component: LoginComponent},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-house', component: HouseComponent},
    { path: 'app-spells', component: SpellsComponent},
    { path: 'app-books', component: BooksComponent},
    { path: 'app-movies', component: MoviesComponent},
    { path: 'app-character-detail/:id', component: CharacterDetailComponent },
    { path: 'app-movie/detail/:id', component: MovieDetailComponent},
    { path: 'app-house-detail/:id', component: HouseDetailComponent },
    { path: '', redirectTo: 'app-home', pathMatch: 'full'}
];
