import { Coche } from "./coche";

export class Profesor{
    private _nombre: string;
    private _coches: Coche[];

    constructor(nombre: string, coches: Coche[]){
        this._nombre = nombre;
        this._coches = coches;
    }
}
