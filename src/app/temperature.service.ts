import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Temperature } from './Model/Temperature';
import { TemperatureTime } from './Model/TemperatureTime';
import { Giorno } from './Model/Giorno';
import { WeekDay } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TempTest } from './Model/temp/Temp';
import { TempWeek } from './Model/temp/TempWeek';
import { AirVisual } from './Model/pollution/AirVisual';


@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  constructor(private httpClient: HttpClient) { }

  getTest(latitude, longitude): Observable<TempTest>{
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=124e8fe73f164ffb8af4ed5817deb342";
    return this.httpClient.get<TempTest>(url);
  }

  getTempS(city): Observable<TempTest>{
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=124e8fe73f164ffb8af4ed5817deb342";
     return this.httpClient.get<TempTest>(url)
  }

  getHistoricalWeather(latitude, longitude): Observable<TempTest>{
    let url = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+latitude+"&lon="+longitude+"&dt=1616234125&appid=124e8fe73f164ffb8af4ed5817deb342"
    //let url = "http://history.openweathermap.org/data/2.5/history/city?lat="+latitude+"&lon="+longitude+"&type=hour&appid=124e8fe73f164ffb8af4ed5817deb342"
    return this.httpClient.get<TempTest>(url);
  }

  getTemperatureWeek(latitude,longitude): Observable<TempWeek>{
    let url = "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+longitude+"&appid=124e8fe73f164ffb8af4ed5817deb342";
    return this.httpClient.get<TempWeek>(url);
  }

  getTemperatureWeekS(city): Observable<TempWeek>{
    let url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=124e8fe73f164ffb8af4ed5817deb342";
    return this.httpClient.get<TempWeek>(url);
  }

  GetAQI(latitude, longitude): Observable<AirVisual>{
    let url = "https://api.airvisual.com/v2/nearest_city?lat="+latitude+"&lon="+longitude+"&key=ece4a0d5-c9d1-49eb-91b9-544116deb7bf"
    return this.httpClient.get<AirVisual>(url);
  }

  GetAQIS(city): Observable<AirVisual>{
    let url = "https://api.airvisual.com/v2/nearest_city?q="+city+"&key=ece4a0d5-c9d1-49eb-91b9-544116deb7bf"
    return this.httpClient.get<AirVisual>(url);
  }
}
