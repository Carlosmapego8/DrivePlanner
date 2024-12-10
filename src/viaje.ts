import { Coche } from "./coche";
import { Profesor } from "./profesor";

export class Viaje{
    private _fecha: Date;
    private _conductor: string;
    private _pasajeros: string[];
    private _salida: string;
    private _coche: string;
    private _plazasOcupadas: number;

    constructor(fecha: Date, salida: string, plazasOcupadas: number){
        
        if (plazasOcupadas < 0) {
            throw new Error("Las plazas ocupadas tienen que ser un numero positivo.");
        }
        
        this._fecha = fecha;
        this._conductor = null;
        this._coche = null;
        this._pasajeros = [];
        this._salida = salida;
        this._plazasOcupadas = number;
    }
}
