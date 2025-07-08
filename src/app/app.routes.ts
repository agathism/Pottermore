import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { SpellsComponent } from './components/spells/spells.component';
import { BooksComponent } from './components/books/books.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'app-register', component: RegisterComponent},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-login', component: LoginComponent},
    { path: 'app-house', component: HouseComponent},
    { path: 'app-spells', component: SpellsComponent},
    { path: 'app-books', component: BooksComponent},
    { path: 'app-movies', component: MoviesComponent},
    { path: '', redirectTo: 'app-home', pathMatch: 'full'}
];
