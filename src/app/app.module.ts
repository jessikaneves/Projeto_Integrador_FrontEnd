import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
<<<<<<< HEAD
import { SobreComponent } from './sobre/sobre.component';
=======
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 84ce05c8b4a7010def0064f8a0ccbd3f7e66418d


@NgModule({
  declarations: [
    AppComponent,

    CadastroComponent,
    EntrarComponent,
    MenuComponent,
    RodapeComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
