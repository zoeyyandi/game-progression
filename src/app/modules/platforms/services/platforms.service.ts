import { IPlatform } from '../types/platforms/platforms.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  private baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getPlatforms() {
    return this.http.get<IPlatform>(this.baseUrl + 'platforms');
  }
}
