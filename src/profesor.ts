import { Coche } from "./coche";

export class Profesor{
    private _nombre: string;
    private _coches: Coche[];
    private _horaEntrada: string; //En formato ""HH:mm"
    private _horaSalida: string; //En formato ""HH:mm"

    constructor(nombre: string, coches: Coche[], horaEntrada: string, horaSalida: string){
        this._nombre = nombre;
        this._coches = coches;
        this._horaEntrada = horaEntrada;
        this._horaSalida = horaSalida;
    }
}
