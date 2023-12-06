import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearUsuarioComponent,
    EliminarUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CrudModule { }
