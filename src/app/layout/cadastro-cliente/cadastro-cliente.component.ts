import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(private clienteService:ClienteService) { }

  cliente:Cliente = new Cliente();

  nome = new FormControl('',[Validators.required])
  cpf = new FormControl('',[Validators.required])
  email = new FormControl('',[Validators.required,Validators.email])
  telefone = new FormControl('',[Validators.required])

  ngOnInit(): void {
  }

  formularioValido():boolean{
    if (this.nome.invalid || this.cpf.invalid || this.email.invalid || this.telefone.invalid) {
      return true;
    }else{
      return false
    }
  }

  salvarCliente(){
    console.log("metodo chamado")
    this.clienteService.salvarCliente(this.cliente).subscribe(
      result => console.log(result)
    )

  }
}
