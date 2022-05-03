import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  usuario = new Usuario();

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate([""])
    }
  }

  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Preencha com o email';
    }

    return this.email.hasError('email') ? 'Insira um email válido' : '';
  }




  onSubmit() {

    this.loginService.realizarLogin(this.usuario).subscribe(jwt =>{
      localStorage.setItem("token",jwt.token)
      debugger
      this.router.navigate([''])
      });

  }
}
