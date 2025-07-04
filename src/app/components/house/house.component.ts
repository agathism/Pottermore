import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { House } from '../../models/house.interface';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})

export class HouseComponent implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  houses: House[] = [];
  ngOnInit(): void {
      this.httpClient.get<House[]>('https://potterapi-fedeperin.vercel.app/en/houses',
        { headers: { 'accept': 'application/json' } }
      ).subscribe({
        next: (data) => {
          this.houses = data;
          console.log(this.houses);
        }
      });
  }
  getFounderClass(house: string): string {
  const baseClass = 'rounded-sm inline-flex font-medium items-center text-black hover:underline';
  
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