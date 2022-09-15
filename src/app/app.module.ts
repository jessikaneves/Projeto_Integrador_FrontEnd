import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
<<<<<<< HEAD
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
=======
import { OrderModule } from 'ngx-order-pipe';
>>>>>>> 28e089bb55413abc1e6923f3fd7a70ffb0a50600









@NgModule({
  declarations: [
    AppComponent,

    CadastroComponent,
    EntrarComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent,
    InicioComponent,
    CategoriaComponent,
    ProdutoComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    ProdutosEditComponent,
    ProdutosDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
