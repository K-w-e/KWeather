import { Coord } from './Coord';

export class City{
    id:number;
    name : string;
    coord: Coord;
    country : string;
    timezone : number;
    sunrise : Int16Array;
    sunset : Int16Array;

    constructor(    id:number, name : string, coord: Coord, country : string, timezone : number, sunrise : Int16Array, sunset : Int16Array){
        this.id = id;
        this.name = name;
        this.coord = coord;
        this.country = country;
        this.timezone = timezone;
        this.sunrise = sunrise;
        this.sunset = this.sunset;
    }
}