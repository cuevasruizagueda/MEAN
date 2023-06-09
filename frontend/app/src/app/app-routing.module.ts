import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

{ path: 'login', component: LoginComponent },
{ path: 'listar-producto', component: ListarProductosComponent, canActivate: [AuthGuard] },

{ path: 'crear-producto', component: CrearProductoComponent},
{ path: 'editar-producto/:id', component: CrearProductoComponent},//le estoy pasando el id para editar
{ path: 'consults', component: ConsultasComponent },
{ path: '**', redirectTo: 'login', pathMatch:'full'}//redirecciono toda la url



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
