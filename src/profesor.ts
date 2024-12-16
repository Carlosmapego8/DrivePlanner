export class Profesor{
    /**
    * Representa a un profesor
    * _nombre: nombre del profesor que lo identifica del resto de profesores
    * _coches: representan las matriculas y la capacidad de los coches del profesor.
    * _horaEntrada: hora a la que el profesor entra a trabajar en formato "HH:mm"
    * _horaSalida: hora a la que el profesor sale de trabajar en formato "HH::mm"
    */
    
    private readonly _nombre: string;
    private readonly _coches: Record<string, int>;
    private readonly _horaEntrada: string; 
    private readonly _horaSalida: string; 

    constructor(nombre: string, coches: Record<string, int>, horaEntrada: string, horaSalida: string){
        this._nombre = nombre;
        this._coches = coches;
        
       const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

        if (!timeRegex.test(horaEntrada)) {
            throw new Error(`El string "${time}" no está en el formato HH:mm válido.`);
        } else{
            this._horaEntrada = horaEntrada;
        }
        
        if (!timeRegex.test(horaSalida)) {
            throw new Error(`El string "${time}" no está en el formato HH:mm válido.`);
        } else{
            this._horaSalida = horaSalida;
        }
              
    }
}
