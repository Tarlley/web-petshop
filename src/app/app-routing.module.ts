import { CadastroClienteComponent } from './layout/cadastro-cliente/cadastro-cliente.component';
import { InicialComponent } from './layout/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/shared/account/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      { path:"",redirectTo:'inicial',pathMatch:'full' },
      { path:'inicial',component:InicialComponent}
    ],
    canActivate:[AuthGuard]
  },
  {
    path:"",
    component: AuthenticationComponent,
    children:[
      { path:"",redirectTo: 'login',pathMatch:'full' },
      { path:"login", component: LoginComponent }
    ]
  },
  {
    path:"cadastro-cliente",
    component:CadastroClienteComponent,
    canActivate:[AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
