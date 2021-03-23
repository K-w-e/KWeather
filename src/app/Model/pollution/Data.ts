import { Location } from './Location';
import { Current } from './Current';

export class Data{
    city : string;
    state : string;
    country : string;
    location : Location;
    current : Current;

    constructor(city : string, state : string, country : string, location : Location, current : Current){
        this.city = city;
        this.state = state;
        this.country = country;
        this.location = location;
        this.current = current;
    }
}