import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoComponent } from './contrato/contrato.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { RegistroUsuariosComponent} from './registro-usuarios/registro-usuarios.component'


const routes: Routes = [
  //{path: '', component: RegistroUsuariosComponent},
  {path: 'registro', component: RegistroUsuariosComponent},
  {path: 'contrato', component:ContratoComponent},
  {path: 'dashboard', component:DashboardComponent, children:[
    {
      path: 'usuario', component:UsuariosComponent,
    }
  ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
