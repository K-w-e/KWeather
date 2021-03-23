export class Weather{
    ts : string;
    tp : number;
    pr: number;
    hu: number;
    ws : number;
    wd : number;
    ic : string;

    constructor(ts : string, tp : number, pr: number, hu: number, ws : number, wd : number, ic : string){
        this.ts = ts;
        this.tp = tp;
        this.pr = pr;
        this.hu = hu;
        this.ws= ws;
        this.wd = wd;
        this.ic = ic;
    }
}