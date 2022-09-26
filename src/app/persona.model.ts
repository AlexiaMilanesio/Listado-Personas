export class Persona {
    /* Sintaxis normal:
    nombre: string = '';
    apellido: string = '';

    constructor(nombre: string, apellido: string){
        this.nombre = nombre;
        this.apellido = apellido;
    }*/

    
    // Sintaxis simplificada
    constructor(public nombre: string, public apellido: string){
    }
}