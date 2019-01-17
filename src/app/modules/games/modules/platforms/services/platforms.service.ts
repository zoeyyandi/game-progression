import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPlatforms } from './../types/platforms-state.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPlatforms() {
    return this.http.get<IPlatforms>(this.baseUrl + 'platforms');
  }
}
