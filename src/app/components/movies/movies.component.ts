import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private httpClient: HttpClient = inject(HttpClient);
    movies: Movie[] = [];
    ngOnInit(): void {
        this.httpClient.get<Movie[]>('https:potterhead-api.vercel.app/api/movies',
          { headers: { 'accept': 'application/json' } }
        ).subscribe({
          next: (data) => {
            this.movies = data;
            console.log(this.movies);
          }
        });
    }
}
