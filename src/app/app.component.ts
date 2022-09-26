import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      // Con estos datos vamos a poder hacer Login hacia Firebase
      apiKey: "AIzaSyDgr2rON15hHYc9P-kEDdPpkFbo43nqSZ0",
      authDomain: "listado-personas-3cae2.firebaseapp.com"
    });
  }

  isAutenticado(){
    // Preguntamos si está autenticado
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}