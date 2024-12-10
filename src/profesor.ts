import { Coche } from "./coche";

export class Profesor{
    /**
    * Representa a un profesor
    * _nombre: nombre del profesor que lo identifica del resto de profesores
    * _coches: representan los identificadores de los coches que el profesor posee.
    * _horaEntrada: hora a la que el profesor entra a trabajar en formato "HH:mm"
    * _horaSalida: hora a la que el profesor sale de trabajar en formato "HH::mm"
    */
    
    private _nombre: string;
    private _coches: string[];
    private _horaEntrada: string; //En formato ""HH:mm"
    private _horaSalida: string; //En formato ""HH:mm"

    constructor(nombre: string, coches: string[], horaEntrada: string, horaSalida: string){
        this._nombre = nombre;
        this._coches = coches;
        this._horaEntrada = horaEntrada;
        this._horaSalida = horaSalida;
    }
}
