import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location = {
    country: '',
    province: '',
    town: ''
  };

  weatherData: any;

  constructor(private http: HttpClient) { }

  getWeather() {
    const { country, province, town } = this.location;
    const apiKey = '065110d2e1327c85e0f2fc0fb487f8da'; // Replace with your OpenWeatherMap API key

    // Use the API key and location data to make an HTTP request to fetch weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town},${province},${country}&appid=${apiKey}&units=metric`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}
