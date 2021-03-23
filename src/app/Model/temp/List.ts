import { Main } from './Main';
import { Weather } from './Weather';
import { Clouds } from './Clouds';
import { Wind } from './Wind';
import { Sys } from './Sys';

export class List{
    dt:number;
    main : Main;
    weather : Weather[];
    clouds : Clouds;
    wind : Wind;
    sys : Sys;
    dt_txt : string;
    
    constructor(dt:number, main : Main, weather : Weather[], clouds : Clouds, wind : Wind, sys : Sys, dt_txt : string){
        this.dt = dt;
        this.main = main;
        this.weather = weather;
        this.clouds = clouds;
        this.wind = wind;
        this.sys = sys;
        this.dt_txt = dt_txt;
    }

}