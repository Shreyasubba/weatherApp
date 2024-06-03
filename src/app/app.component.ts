import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cityName:string='landon';
  weatherData?:WeatherData;
  constructor(private weatherService:WeatherService){

  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName=''
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
          this.cityName=''

  }
  private getWeatherData(city:string){
    return this.weatherService.getWeatherData(city).subscribe(
      {
        next:(response)=>{
          this.weatherData=response
          console.log(response);
        }
      }
    );
  }
}
