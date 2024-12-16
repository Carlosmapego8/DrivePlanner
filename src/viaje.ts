import { Profesor } from "./profesor";

export type Viaje{
      /**
     * Representa un viaje
     * _fecha: representa la fecha en la que se realizará el viaje. Identifica al viaje por completo
     * _salida: representa la hora del día a la que saldrá el viaje
     */
    readonly _fecha: Date;
    readonly _horaSalida: string;
    
}

export class AsignacionViajes{
   
    private _asignaciones: Record<Viaje, Set<Profesor>>;   

    constructor(){
         this._asignaciones = New Record();
    }
}
