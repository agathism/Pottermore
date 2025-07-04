import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'authToken';
  constructor() { }

  // Je vais stocker le token
  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Je récupère le token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

}
