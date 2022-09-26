import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ){}

    // Regresar la información (arreglo) de la base de datos
    cargarPersonas(){
        // Solicitamos token que nos regresó la autenticación
        const token = this.loginService.getIdToken();
        // Ahora debemos adjuntar el token como un query parameter de la url
        return this.httpClient.get<Persona[]>('https://listado-personas-3cae2-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    // Guardar información en la base de datos
    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-3cae2-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
        .subscribe(
            response => console.log('Resultado de guardar las personas ' + response),
            error => console.log('Error al guardar personas: ' + error)
        );
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-3cae2-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, persona).subscribe(
            response => console.log('Resultado de modificar el objeto persona: ' + response),
            error => console.log('Error al modificar persona: ' + error)
        );
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-3cae2-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            response => console.log('Resultado de eliminar el objeto persona: ' + response),
            error => console.log('Error al eliminar persona: ' + error)
        );
    }
}