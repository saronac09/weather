import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:any
  units:any='metric'
  weather:any
  temp:any
  tempmin:any
  tempmax:any
  wind:any
  humidity:any

  constructor(private serve:WeatherService){}
  ngOnInit():void{
    
  }
 


  get(){  
   return this.serve.getdata(this.city,this.units).subscribe((res:any)=>{
      this.temp=res.main.temp
      this.tempmax=res.main.temp_max
      this.tempmin=res.main.temp_min
      this.wind=res.wind.speed
      this.humidity=res.main.humidity
      

    })
        }
}
