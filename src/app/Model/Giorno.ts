export class Giorno{
    temperature:string;
    type:string;
    icon:string;
    time:Date;

    constructor(temperature: string, type: string, icon: string, time: Date){
        this.temperature=temperature;
        this.type=type;
        this.icon=icon;
        this.time=time;
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

    getTime(){
        return this.time;
    }

    getTimeString(){
        return this.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
}