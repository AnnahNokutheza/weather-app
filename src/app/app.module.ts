import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Add FormsModule to the imports array
    RouterModule.forRoot([{
      path: 'weather',
      component: WeatherComponent,
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
