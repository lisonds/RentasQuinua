import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importando para scripts js

//fin de servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CuaerpoComponent } from './cuaerpo/cuaerpo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './persona/persona.service';
//para direcciones 
import { RouterModule, Routes } from '@angular/router';
import { ReciboComponent } from './recibo/recibo.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component'; 
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './persona/form.component'
import { FormsModule } from '@angular/forms';

//form
const routes:Routes=[
  {path:'',redirectTo:'/cuerpo',pathMatch:'full'},
  {path:'persona',component:PersonaComponent},
  {path:'recibo',component:ReciboComponent},
  {path:'infPersona',component:InformacionUsuarioComponent},
  {path:'persona/form',component:FormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuaerpoComponent,
    UsuarioComponent,
    PersonaComponent,
    ReciboComponent,
    InformacionUsuarioComponent,
    FormComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
