import { Coche } from "./coche";
import { Profesor } from "./profesor";

export class Viaje{
    private _fecha: Date;
    private _kilometros: number;
    private _conductor: string;
    private _pasajeros: string[];
    private _salida: string;
    private _coche: string;
    private _plazasOcupadas: number;

    constructor(fecha: Date, kilometros: number, salida: string, plazasOcupadas: number){
        this._fecha = fecha;
        this._kilometros = kilometros; 
        this._conductor = null;
        this._coche = null;
        this._pasajeros = [];
        this._salida = salida;
        this._plazasOcupadas = number;
    }
}
