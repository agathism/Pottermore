import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import HarryPotterCharacter from '../../models/character.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  private httpClient: HttpClient = inject(HttpClient);
  characters: HarryPotterCharacter[] = [];
  ngOnInit(): void {
    this.httpClient.get<HarryPotterCharacter[]>('https://potterhead-api.vercel.app/api/characters',
      { headers: { 'accept': 'application/json' } }
    ).subscribe({
      next: (data) => {
        this.characters = data;
        console.log(this.characters);
      }
    });
  }

  getHouseClass(house: string): string {
  const baseClass = 'font-extrabold p-2 px-6 rounded-xl transition-colors';
  
  switch(house?.toLowerCase()) {
    case 'gryffindor':
      return `${baseClass} bg-[#ae0001] hover:bg-[#ae0001] text-white`;
    case 'slytherin':
      return `${baseClass} bg-[#225443] hover:bg-[#225443] text-white`;
    case 'hufflepuff':
      return `${baseClass} bg-[#ffdb00] hover:bg-[#ffdb00] text-black`;
    case 'ravenclaw':
      return `${baseClass} bg-[#222f5b] hover:bg-[#222f5b] text-white`;
    default:
      return `${baseClass} bg-gray-600 hover:bg-gray-500 text-white`;
    }
  }
};

