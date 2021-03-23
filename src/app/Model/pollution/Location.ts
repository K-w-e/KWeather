import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Location{
    type :string;
    coordinates : Float32Array[];

    constructor(type :string, coordinates : Float32Array[]){
        this.type = type;
        this.coordinates = coordinates;
    }
}