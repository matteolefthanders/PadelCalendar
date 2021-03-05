import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from  '../auth/auth.service';
import { ErrormatcherService } from  '../utilities/errormatcher.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

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
  states: any[] = ["open","close"];

 
  constructor(private  authService:  AuthService, private formBuilder: FormBuilder, private myErrorStateMatcher: ErrormatcherService ) {
  	this.matcher = new ErrormatcherService();
  }
  ngOnInit() {
  	this.createGameForm = this.formBuilder.group({
  		'date' : ['', Validators.required],
  		'state' : ['open', Validators.required],
  		'place': ['Padel Tivoli Terme', Validators.required]
    });
  	this.showForm = this.authService.isLoggedIn;
  	if(this.showForm){
  		var loggedUser = this.authService.getUserLoggedIn();
  		this.ref.child(loggedUser.uid).on("value", x=>{
				
  		}, err=>{
  			console.log("err")
  			console.log(err)
  		})
  	}
  }
  onFormSubmit(form: any){
		const personalInfo = form;
		this.showForm = this.authService.isLoggedIn;
  	if(this.showForm){
  
  	}
  }
}
