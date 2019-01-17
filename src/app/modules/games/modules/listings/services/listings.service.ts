import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IListings } from './../types/listings-state.interface';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getListings() {
    return this.http.get<IListings>(this.baseUrl + 'games');
  }
}
