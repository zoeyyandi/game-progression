import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILanguage } from '../types/language/language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getLanguages() {
    return this.http.get<ILanguage>(this.baseUrl + 'languages');
  }
}
