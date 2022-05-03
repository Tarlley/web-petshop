import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpInterceptorImpl implements HttpInterceptor {

    constructor(private authServic3:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
        let authorization = this.authServic3.token()==null ? '': 'Bearer '+ this.authServic3.token();

        const newRequest = req.clone({
            setHeaders:{authorization:authorization}
        })
        return next.handle(newRequest);
    }
}