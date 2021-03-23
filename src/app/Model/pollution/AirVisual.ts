import { Data } from './Data';

export class AirVisual{
    status:string;
    data : Data;
    
    constructor(status:string , data: Data){
        this.status = status;
        this.data = data;
    }
}