import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch:"full"},
  
  
    {path: 'entrar', component: EntrarComponent},
    {path: 'cadastrar', component: CadastroComponent},
    
  
    
  ];
  

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
  })
  export class AppRoutingModule { }
  
