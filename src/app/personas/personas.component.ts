import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../PersonasService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router
  ){
  }

  // Inicializamos nuestro arreglo de personas que tenemos en el servicio PersonasService en la interface OnInit
  ngOnInit(): void {
    // this.personas = this.personasService.personas; -> ya no lo vamos a necesitar
    this.personasService.obtenerPersonas().subscribe((personas: Persona[]) => {
      this.personas = personas;
      this.personasService.setPersonas(personas);
    });
  }
  
  // Redirigirnos a la ruta personas/agregar
  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}