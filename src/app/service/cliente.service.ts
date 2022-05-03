import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";


@Injectable({
    providedIn: 'root'
})

export class ClienteService{

    urlBase = 'http://localhost:8080/api'

    constructor(private http:HttpClient){}

    salvarCliente(cliente:Cliente):Observable<any>{
        return this.http.post(this.urlBase+'/proprietario',cliente)
    }
}