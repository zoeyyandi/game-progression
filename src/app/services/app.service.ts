import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProfile } from '../types/app-state/app-state.interface';
import { ILanguage } from './../types/app-state/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<IProfile>(this.baseUrl + 'profile');
  }
  getLanguages() {
    return this.http.get<ILanguage>(this.baseUrl + 'languages');
  }
}
