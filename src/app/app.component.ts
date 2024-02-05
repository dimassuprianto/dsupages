import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}

interface BloodTypes {
  id: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //public forecasts: WeatherForecast[] = [];
  public bloodTypes: BloodTypes[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.getForecasts();
    this.getBloodTypes();
  }

  getBloodTypes() {
    this.http.get<BloodTypes[]>('https://dimassuprianto.github.io/dsuapi/bloodtypes.json').subscribe(
      (result) => {
        this.bloodTypes = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //getForecasts() {
  //  this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //    (result) => {
  //      this.forecasts = result;
  //    },
  //    (error) => {
  //      console.error(error);
  //    }
  //  );
  //}

  title = 'Blood Types';
}
