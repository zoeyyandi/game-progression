import { IGame } from './../types/games/games.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<IGame>(this.baseUrl + 'games');
  }
}
