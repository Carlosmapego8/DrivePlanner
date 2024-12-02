import { Coche } from "./coche";
import { Profesor } from "./profesor";

export class Viaje{
    private _fecha: Date;
    private _kilometros: number;
    private _conductor: Profesor;
    private _pasajeros: Profesor[];

    constructor(fecha: Date, kilometros: number){
        this._fecha = fecha;
        this._kilometros = kilometros; 
        this._conductor = null;
        this._pasajeros = []
    }
}
