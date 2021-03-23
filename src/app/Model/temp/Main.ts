export class Main{
    temp : Float32Array;
    feels_like: Float32Array;
    temp_min : Float32Array;
    temp_max : Float32Array;
    pressure : number;
    humidity : number;
    sea_level : number;
    grnd_level : number;

    constructor(temp : Float32Array, feels_like: Float32Array, temp_min : Float32Array ,temp_max : Float32Array,
        pressure : number, humidity : number ,sea_level : number, grnd_level : number){
            this.temp = temp;
            this.feels_like = feels_like;
            this.temp_min = temp_min;
            this.temp_max = temp_max;
            this.pressure = pressure;
            this.humidity = humidity;
            this.sea_level = sea_level;
            this.grnd_level = grnd_level;
        }
}