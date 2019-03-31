import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urlPattern } from '../weather-urls'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  constructor(private http: HttpClient) { }
  

  getCurrentWeather(selectedOption) {
    return this.http.get(
      urlPattern.baseUrl +
      urlPattern.dayWeather +
      selectedOption +
      urlPattern.appId +
      urlPattern.units)
  }

  getNextHour(selectedOption) {
    return this.http.get(
      urlPattern.baseUrl +
      urlPattern.daysweather +
      selectedOption +
      urlPattern.appId +
      urlPattern.units)
  }
  
}
