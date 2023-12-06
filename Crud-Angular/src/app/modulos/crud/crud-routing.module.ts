import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';

const routes: Routes = [
  { 
    path:"usuario-listar",
    component: ListarComponent
  },
  {
    path: "usuario-agregar",
    component: CrearUsuarioComponent
  },
  {
    path: "usuario-eliminar/:id",
    component: EliminarUsuarioComponent
  },
  {
    path: "usuario-editar/:id",
    component: ActualizarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
