import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService{
    token: string;

    constructor(private router: Router){}

    login(email: string, password: string){
        const auth = firebase.getAuth();
        // Procesamos el email y la password
        firebase.signInWithEmailAndPassword(auth, email, password).then(
            response => {
                auth.currentUser?.getIdToken().then(
                    token => {
                        // Obtenemos el token
                        this.token = token;
                        // Redirección a la página principal
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        firebase.getAuth().signOut().then( 
            () => {
                this.token = '';
                this.router.navigate(['login']);
            }
        ).catch(error => {console.log('Error de logout: ' + error)});
    }
}