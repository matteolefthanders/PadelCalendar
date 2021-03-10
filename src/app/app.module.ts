import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { CreategameComponent } from './creategame/creategame.component';
import { AddtogameComponent } from './addtogame/addtogame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GamelistComponent,
    CreategameComponent,
    AddtogameComponent,
    HomeComponent,
    HeaderComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSnackBarModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSidenavModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
