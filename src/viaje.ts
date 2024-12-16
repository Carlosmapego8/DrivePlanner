import { Profesor } from "./profesor";

export type Viaje{
      /**
     * Representa un viaje
     * _fecha: representa la fecha en la que se realizará el viaje. Identifica al viaje por completo
     * _salida: representa la hora del día a la que saldrá el viaje
     * _plazasOcupadas: representan las plazas ocupadas en un viaje (por acompañantes, transporte de objetos, ...), este valor reducirá la capacidad inicial del coche
     */
    readonly _fecha: Date;
    readonly _horaSalida: string;
    readonly _plazasOcupadas: number;
    
}

export class AsignacionViajes{
   
    private _asignaciones: Record<Viaje, Set<Profesor>>;   

    constructor(){
         this._asignaciones = New Record();
    }
}
