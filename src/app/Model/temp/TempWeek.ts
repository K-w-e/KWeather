import { List } from './List';
import { City } from './City';

export class TempWeek{
    cod : number;
    message : number;
    cnt : number;
    list : List;
    city:City;

    constructor(cod : number, message : number, cnt : number, list : List, city:City){
        this.cod = cod;
        this.message = message;
        this.cnt = cnt;
        this.list = list;
        this.city = city;
    }

    getList():List{
        return this.list;
    }
}