import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as $ from 'jquery';
import { ModalCityPage } from './modal-city/modal-city.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  cities = [];
  url = [];
  temperature = [];
  indice:number;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public httpClient:HttpClient,
    public storageService: Storage,
    private modal: ModalController,
  ) {
    statusBar.backgroundColorByHexString('#f4f5f8');
    this.initializeApp();
    this.Get();
    this.GetWeatherFromDB();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeStyle(){
    let app = document.getElementById("app");
    app.classList.toggle("darkMode");
    app.classList.toggle("lightMode");

    if(app.classList.contains("lightMode"))
      this.statusBar.backgroundColorByHexString('#f4f5f8');
    else
      this.statusBar.backgroundColorByHexString('#989aa2');
    this.change2();
  }

  change2(){
    let menu = document.getElementById("test");
    menu.classList.toggle("darkMode");
    menu.classList.toggle("lightMode");
  }

  

  Get(){
    this.storageService.forEach((value: any, key: string, iterationNumber: Number) => {
      this.cities[(iterationNumber.valueOf()-1).toString()] = value;
    }).then(
      (result) => {
        this.GetWeatherFromDB();
      });
  }

  menuOpened(){
    this.Get();
  }

  GetWeatherFromDB() {
    for(let k in this.cities){
      this.url[k] = "https://api.openweathermap.org/data/2.5/weather?q="+this.cities[k]+"&appid=124e8fe73f164ffb8af4ed5817deb342";
      this.httpClient.get(this.url[k]).subscribe((temperaturedata)=>{
        var obj = <any>temperaturedata;
        this.temperature[k] = ((parseFloat(obj.main.temp)-273.15).toFixed(2)).toString()+"°C";
      })
    }
  }

  removeCity(city){
    let index = this.cities.indexOf(city);
    this.cities.splice(index, 1);
    this.temperature.splice(index, 1);
    this.storageService.remove(city); 
    this.Get();
    this.indice--;
  }

  remove(){
    $(".btn").each(function() {
      $(this).toggleClass("remove");
    });
  }

  cityClick(cityM){
    this.openModalCity(cityM);
  }

  async openModalCity(cityM){
    const myModal = await this.modal.create({
      component: ModalCityPage,
      componentProps: { 
        city: cityM,
      }
    });
    await myModal.present();
  }
  
}
