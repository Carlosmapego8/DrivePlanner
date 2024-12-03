import { Coche } from "./coche";
import { Profesor } from "./profesor";
import { Viaje } from "./viaje";


class GestorViajes{

    private _viajesDisponibles: Viaje[];
    private _profesoresDisponibles: Profesor[];

    constructor(viajes: Viaje[], profesores: Profesor[]){
        this._viajesDisponibles = viajes;
        this._profesoresDisponibles = profesores;
    }

}
