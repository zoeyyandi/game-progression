import { IProfile } from './../../profile/types/profile-state.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourProfileService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  updateProfile() {
    return this.http.put<IProfile>(this.baseUrl + 'profile', {});
  }
}
