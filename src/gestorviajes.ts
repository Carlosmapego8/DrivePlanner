import { Profesor } from "./profesor";
import { Viaje } from "./viaje";


class GestorViajes{
     /**
         * Entidad encargada de realizar la lógica de negocio, asignando los viajes a los distintos profesores
         * _viajesDisponibles: representan los identificadores de los viajes que aún no están asignados
         * _profesoresDisponibles: representan los identificadores de los profesores que necesitan tener un viaje asignado
         */
    private _viajesDisponibles: Set<Date>;
    private _profesoresDisponibles: Set<string>;

    constructor(viajes: Set<Date>, profesores: Set<string>){
        this._viajesDisponibles = viajes;
        this._profesoresDisponibles = profesores;
    }

}
