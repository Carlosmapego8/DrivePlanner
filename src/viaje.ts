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

export type ViajesAsignados{
   /**
     * Representa la asignación de viajes. En cada viaje se asigna una lista de profesores que viajarán en él y la matrícula del coche en caso de ser el conductor del viaje. Lo calcula la lógica de negocio
   */
    Record<Viaje, Record<Profesor, string>>;   
}
