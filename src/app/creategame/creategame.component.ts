import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from  '../auth/auth.service';
import { ErrormatcherService } from  '../utilities/errormatcher.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from  "@angular/router";

import firebase from 'firebase';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {

  createGameForm: FormGroup;
  ref = firebase.database().ref('Games/');
  showForm = false;
  matcher: ErrorStateMatcher
  states: any[] = ["open","closed"];
  players: any[] = [];

 
  constructor(private  authService:  AuthService, private formBuilder: FormBuilder, private myErrorStateMatcher: ErrormatcherService, public  router:  Router ) {
  	this.matcher = new ErrormatcherService();
  }
  ngOnInit() {
  	this.createGameForm = this.formBuilder.group({
  		'date' : ['', Validators.required],
  		'state' : ['open', Validators.required],
  		'place': ['Padel Tivoli Terme', Validators.required],
  		'player1': [{value: null, disabled: true}, Validators.required,],
  		'player2': [{value: null, disabled: true}],
  		'player3': [{value: null, disabled: true}],
  		'player4': [{value: null, disabled: true}]
    });
  	this.showForm = this.authService.isLoggedIn;
  	if(this.showForm){
  		var loggedUser = this.authService.getUserLoggedIn();
		  this.createGameForm.controls['player1'].setValue(loggedUser.email);  		
  	}
  }
  onFormSubmit(form: any){
	const _createGameForm = form;
	this.showForm = this.authService.isLoggedIn;
	if(this.showForm){
		var loggedUser = this.authService.getUserLoggedIn();
    _createGameForm['player1']=loggedUser.uid;
		this.ref.push(_createGameForm);
    this.router.navigate(['/gamelist']);
	}
  	
  }
}
