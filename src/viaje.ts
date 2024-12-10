import { Profesor } from "./profesor";

export class Viaje{
     /**
     * Representa un viaje
     * _fecha: representa la fecha en la que se realizará el viaje. Identifica al viaje por completo
     * _conductor: representa el identificador al conductor del viaje, se calculará por la lógica de negocio. 
     * _pasajeros: representan a los identificadores a los pasajeros del viaje, los calculará la lógica de negocio.
     * _salida: representa la hora del día a la que saldrá el viaje
     * _plazasOcupadas: representan las plazas ocupadas en un viaje (por acompañantes, transporte de objetos, ...), este valor reducirá la capacidad inicial del coche
     */
    
    private _fecha: Date;
    private _conductor: string;
    private _pasajeros: string[];
    private _salida: string;
    private _plazasOcupadas: number;

    constructor(fecha: Date, salida: string, plazasOcupadas: number){
        
        if (plazasOcupadas < 0) {
            throw new Error("Las plazas ocupadas tienen que ser un numero positivo.");
        }
        
        this._fecha = fecha;
        this._conductor = null;
        this._pasajeros = [];
        this._salida = salida;
        this._plazasOcupadas = number;
    }
}
