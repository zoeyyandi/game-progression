import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProfile } from '../../../types/app-state/app-state.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  updateProfile() {
    return this.http.put<IProfile>(this.baseUrl + 'profile', {});
  }
}
