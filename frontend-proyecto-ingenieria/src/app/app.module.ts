import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContratoComponent } from './contrato/contrato.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',redirectTo:'/inico', pathMatch: 'full'},
  {path: 'inicio',component: InicioComponent},
  {path: 'contrato',component: ContratoComponent},
  {path: 'registro', component: RegistroUsuariosComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuariosComponent,
    ContratoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    AppComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
