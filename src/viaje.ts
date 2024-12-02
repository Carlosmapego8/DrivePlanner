import { Coche } from "./coche";
import { Profesor } from "./profesor";

export class Viaje{
    private _fecha: Date;
    private _kilometros: number;

    constructor(fecha: Date, kilometros: number){
        this._fecha = fecha;
        this._kilometros = kilometros;      
    }
}
