// Imports de Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Imports de Componentes
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
// Imports de Servicios
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './PersonasService.service';
import { DataServices } from './data.service';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    PersonasService,
    DataServices,
    LoginService,
    LoginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
