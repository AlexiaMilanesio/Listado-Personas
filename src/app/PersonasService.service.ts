import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.service';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
    personas: Persona[] = [];
    
    saludar = new EventEmitter<number>();

    constructor(
        private loggingService: LoggingService,
        private dataServices: DataServices
    ){}

    // Actualizar el arreglo recuperado de la base de datos
    setPersonas(personas: Persona[]){
        this.personas = personas;        
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }

    agregarPersona(persona: Persona){
        this.loggingService.enviaMensajeAConsola('Agregamos persona: ' + persona.nombre + ' ' + persona.apellido);
        // Poder agregar información desde la página incluso si no tenemos ninguna información en la base de datos
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        // Guardar personas en la base de datos
        this.dataServices.guardarPersonas(this.personas);
    }

    encontrarPersona(index: number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index: number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        // Utilizamos el servicio DataServices para llamar método modificarPersona()
        this.dataServices.modificarPersona(index, persona);
    }

    eliminarPersona(index: number){
        // Eliminamos el registro del arreglo
        this.personas.splice(index, 1);
        // Lo eliminamos de la base de datos
        this.dataServices.eliminarPersona(index);
        // Volvemos a guardar todo el arreglo en la base de datos para regenerar los índices y así no queden índices vacíos
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }    
    }
}