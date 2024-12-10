export class Coche{
    private _matricula: string;
    private _capacidad: number;

    constructor(matricula: string, capacidad: number){
          /**
         * Representa un coche
         * _matricula: representa la matricula del coche que lo identifica del resto de coches
         * _capacidad: representa la capacidad de pasajeros máxima del coche
         */
    
        if (capacidad < 0) {
            throw new Error("La capacidad de un coche tiene que ser un numero positivo.");
        }
        this._matricula = matricula;
        this._capacidad = capacidad;
    }
}
