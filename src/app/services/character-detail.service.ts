import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import HarryPotterCharacter from '../models/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharacterDetailService {

  private httpClient: HttpClient = inject(HttpClient);
  private baseUrl = 'https://potterhead-api.vercel.app/api/characters/';
  name: string | null = null;

  getCharacter(name: string): Observable<HarryPotterCharacter> {
    return this.httpClient.get<HarryPotterCharacter>(this.baseUrl + '/' + name, 
      { headers: 
        { 'accept': 'application/json' }
       });
  }
}
