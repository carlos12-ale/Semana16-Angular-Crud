import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { CrudModule } from './modulos/crud/crud.module';

const routes: Routes = [{
  path:"inicio",
  component: CrudModule,
},
{
  path:"",
  pathMatch: "full", 
  redirectTo: "crud/usuario-listar"
},
{
  path:"crud",
  loadChildren: () => import("./modulos/crud/crud.module").then(m => m.CrudModule)
},
{
  path: "**", 
  component: RutaNoEncontradaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
