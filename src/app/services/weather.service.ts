import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Weather, WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpclient:HttpClient){}
  getWeatherData(cityName:string): Observable<WeatherData> {
   return this.httpclient.get<WeatherData>(
environment.weatherApiBaseUrl+'city/'+cityName+'/EN' ,
{
  headers: new HttpHeaders()
  .set( environment.weatherHeaderHostParameter , environment.weatherHeaderHostValue )
  .set( environment.weatherHeaderKeyParameter , environment.weatherHeaderKeyValue ) 
} 
)

  }
}
