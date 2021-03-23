import { Weather } from './Weather';
import { Pollution } from './Pollution';

export class Current{
    weather : Weather;
    pollution : Pollution;

    constructor(weather : Weather, pollution : Pollution){
        this.weather = weather;
        this.pollution =pollution;
    }
}