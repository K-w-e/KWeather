export class Temperature{
    place:string;
    temperature:string;
    type:string;
    icon:string;
    des:string;
    humidity:string;
    speed:string;
    pressure:string;

    constructor(place: string, 
        temperature: string, 
        type: string, 
        icon: string, 
        des: string, 
        humidity: string,
        speed: string, 
        pressure: string){
            this.place=place;
            this.temperature=temperature;
            this.type=type;
            this.icon=icon;
            this.des=des;
            this.humidity=humidity;
            this.speed=speed;
            this.pressure=pressure;
            
    }

    getPlace(){
        return this.place;
    }

    getTemp(){
        return this.temperature;
    }

    getType(){
        return this.type;
    }

    getIcon(){
        return this.icon;
    }

    getDes(){
        return this.des;
    }

    getHumidity(){
        return this.humidity;
    }

    getSpeed(){
        return this.speed;
    }

    getPressure(){
        return this.pressure;
    }


}
