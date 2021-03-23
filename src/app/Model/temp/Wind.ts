export class Wind{
    speed : Float32Array;
    deg : number;

    constructor(speed: Float32Array, deg:number){
        this.speed = speed;
        this.deg = deg;
    }
}