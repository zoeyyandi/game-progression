import { IGame } from '../types/dashboard-state/dashboard-state.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { transformGames } from '../types/games-state/games-state.functions';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getGames() {
    const result = this.http
      .get<IGame[]>(this.baseUrl + 'games')
      .pipe(map((games: IGame[]) => transformGames(games)));
    return result;
  }
}
