export class Sys{
    country : string;
    sunrise : Int16Array;
    sunset : Int16Array;

    constructor(country:string, sunrise:Int16Array, sunset:Int16Array){
        this.country = country;
        this.sunrise = sunrise;
        this.sunset = sunset;
    }
}