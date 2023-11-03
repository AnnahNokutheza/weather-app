import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],

})
export class WeatherComponent {
  location = {
    country: '',
    province: '',
    town: ''
  };
  weatherData: any; // Define the weatherData property

  constructor(private http: HttpClient) { }

  getWeather() {
    // Build the API URL based on the user's input
    const apiKey = '065110d2e1327c85e0f2fc0fb487f8da'; // Replace with your actual API key
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const { country, province, town } = this.location;
    const query = `q=${town},${province},${country}`;
    const units = 'metric'; // Change to 'imperial' for Fahrenheit
    const apiUrl = `${baseUrl}?${query}&units=${units}&appid=${apiKey}`;

    // Send the GET request
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}
