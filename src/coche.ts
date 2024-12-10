export class Coche{
    private _matricula: string;
    private _capacidad: number;

    constructor(matricula: string, capacidad: number){
        if (capacidad < 0) {
            throw new Error("La capacidad de un coche tiene que ser un numero positivo.");
        }
        this._matricula = matricula;
        this._capacidad = capacidad;
    }
}
