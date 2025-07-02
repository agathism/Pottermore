import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { SpellsComponent } from './components/spells/spells.component';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
    { path: 'app-login', component: LoginComponent},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-house', component: HouseComponent},
    { path: 'app-spells', component: SpellsComponent},
    { path: 'app-books', component: BooksComponent}
];
