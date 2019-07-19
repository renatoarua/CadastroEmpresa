import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDivider,
  MatList,
  MatDividerModule,
  MatListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpresaComponent,
    CadastroEmpresaComponent,
    LoginComponent,
    MenuComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
