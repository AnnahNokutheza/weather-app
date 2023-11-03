import { Component } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
})
export class WeatherSearchComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (this.city.trim() !== '') {
      this.weatherService.getWeather(this.city).then((response) => {
        this.weatherData = response.data;
      });
    }
  }
}
