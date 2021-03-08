import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {GamelistComponent} from './gamelist/gamelist.component';
import {HomeComponent} from './home/home.component';
import {CreategameComponent} from './creategame/creategame.component';
import {AddtogameComponent} from './addtogame/addtogame.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gamelist', component: GamelistComponent },
  { path: 'creategame', component: CreategameComponent },
  { path: 'addtogame/:email/:gameid', component: AddtogameComponent },
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
