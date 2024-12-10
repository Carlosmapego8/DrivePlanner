import { Coche } from "./coche";
import { Profesor } from "./profesor";
import { Viaje } from "./viaje";


class GestorViajes{

    private _viajesDisponibles: Date[];
    private _profesoresDisponibles: string[];

    constructor(viajes: Date[], profesores: string[]){
        this._viajesDisponibles = viajes;
        this._profesoresDisponibles = profesores;
    }

}
