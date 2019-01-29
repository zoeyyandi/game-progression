import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from '../types/profile-state.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<IProfile>(this.baseUrl + 'profile');
  }
}
