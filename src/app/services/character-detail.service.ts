import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import HarryPotterCharacter from '../models/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService {

  private httpClient: HttpClient = inject(HttpClient);
  private baseUrl = 'https://potterhead-api.vercel.app/api/characters';

  getCharacter(characterId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get(`${this.baseUrl}/characters/${characterId}`, { headers });
  }
}
