import { InicialComponent } from './layout/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AccountComponent } from './account/shared/account/account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/shared/account/login.component';
import { LoginService } from './service/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CadastroClienteComponent } from './layout/cadastro-cliente/cadastro-cliente.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteService } from './service/cliente.service';
import { AuthService } from './service/auth.service';
import { HttpInterceptorImpl } from './util/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AccountComponent,
    HomeComponent,
    AuthenticationComponent,
    InicialComponent,
    CadastroClienteComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
  ],
  exports:[
  ],
  providers: [
    LoginService,
    ClienteService,
    AuthService,
    {provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorImpl,
    multi:true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
