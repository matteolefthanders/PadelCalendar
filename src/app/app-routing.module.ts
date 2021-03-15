import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GamelistComponent} from './gamelist/gamelist.component';
import {HomeComponent} from './home/home.component';
import {CreategameComponent} from './creategame/creategame.component';
import {EquipoComponent} from './equipo/equipo.component';
import {LoginactivateService} from './auth/loginactivate.service';
 


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[LoginactivateService] },
  { path: 'gamelist', component: GamelistComponent, canActivate:[LoginactivateService] },
  { path: 'equipo', component: EquipoComponent, canActivate:[LoginactivateService] },
  { path: 'creategame', component: CreategameComponent, canActivate:[LoginactivateService] },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
