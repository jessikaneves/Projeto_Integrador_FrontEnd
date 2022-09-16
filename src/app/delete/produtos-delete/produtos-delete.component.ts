import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produtos:Produtos = new Produtos()
  idProdutos: number
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private produtosService: ProdutosService,
  
 

  ) { }
  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }
    this.idProdutos= this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProdutos)

  }

  findByIdProdutos(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos)=>{
      this.produtos = resp
    })
  }

  
  apagar(){
    this.produtosService.deleteProduto(this.idProdutos).subscribe(()=>{
     alert('Produto apagado com sucesso!')
     this.router.navigate(['/produtos'])
    })
 
   }

}
