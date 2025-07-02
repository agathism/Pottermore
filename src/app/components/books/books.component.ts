import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import HarryPotterCharacter from '../../models/character.interface';
import Book from '../../models/book.interface';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{
    private httpClient: HttpClient = inject(HttpClient);
    books: Book[] = [];
    ngOnInit(): void {
      this.httpClient.get<Book[]>('https://potterapi-fedeperin.vercel.app/en/books',
        { headers: { 'accept': 'application/json' } }
      ).subscribe({
        next: (data) => {
          this.books = data;
          console.log(this.books);
        }
      });
    }
  };
