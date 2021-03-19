import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato/contrato.component';
import { RegistroUsuariosComponent} from './registro-usuarios/registro-usuarios.component'


const routes: Routes = [
  {path: 'registro', component: RegistroUsuariosComponent},
  {path: 'contrato', component:ContratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
