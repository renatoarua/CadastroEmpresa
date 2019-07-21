import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'cadastro-empresa', component: CadastroEmpresaComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'lista-empresa', component: ListarEmpresaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
