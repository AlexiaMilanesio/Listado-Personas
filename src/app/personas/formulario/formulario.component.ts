import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../PersonasService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion: number;

  constructor(
    private logginService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.personasService.saludar.subscribe( (indice: number) =>  alert('El índice es: ' + indice) );
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    // Recuperamos QueryParams
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    // Ya podemos preguntar directamente por el modoEdicion y no por en index en el if
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }
  
  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    
     // Preguntamos directamente por el modoEdicion y no por en index en el if
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
      this.router.navigate(['personas']);
    }
  }
}