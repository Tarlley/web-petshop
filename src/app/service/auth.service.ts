import { Injectable } from "@angular/core";


@Injectable()
export class AuthService{

    excluirToken() {
        localStorage.removeItem('token');
      }
    
      token(): string {
        return localStorage.getItem('token');
      }
}