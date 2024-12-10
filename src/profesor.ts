export class Profesor{
    /**
    * Representa a un profesor
    * _nombre: nombre del profesor que lo identifica del resto de profesores
    * _coches: representan las matriculas y la capacidad de los coches del profesor.
    * _horaEntrada: hora a la que el profesor entra a trabajar en formato "HH:mm"
    * _horaSalida: hora a la que el profesor sale de trabajar en formato "HH::mm"
    */
    
    private _nombre: string;
    private _coches: Record<string, int>;
    private _horaEntrada: string; //En formato ""HH:mm"
    private _horaSalida: string; //En formato ""HH:mm"

    constructor(nombre: string, coches: Record<string, int>, horaEntrada: string, horaSalida: string){
        this._nombre = nombre;
        this._coches = coches;
        this._horaEntrada = horaEntrada;
        this._horaSalida = horaSalida;
    }
}
