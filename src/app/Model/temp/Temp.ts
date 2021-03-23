import { Weather } from './Weather'
import { Coord } from './Coord'
import { Main } from './Main';
import { Wind } from './Wind';
import { Clouds } from './Clouds';
import { Sys } from './Sys';

export class TempTest{
    coord: Coord;
    weather : Weather[];
    base : string;
    main : Main;
    wind : Wind;
    clouds : Clouds;
    dt : Int16Array;
    sys : Sys;
    timezone : number;
    id : number;
    name : string;
    cod : number;

    constructor(    coord: Coord, weather : Weather[], base : string, main : Main, wind : Wind,
        clouds : Clouds, dt : Int16Array, sys : Sys, timezone : number, id : number, name : string, cod : number){
            this.coord = coord;
            this.weather = weather;
            this.base = base;
            this.main = main;
            this.wind = wind;
            this.clouds = clouds;
            this.dt = dt;
            this.sys = sys;
            this.timezone = timezone;
            this.id = id;
            this.name = name;
            this.cod = cod;
        }
}