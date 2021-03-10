import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from  '../auth/auth.service';
import { ErrormatcherService } from  '../utilities/errormatcher.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import firebase from 'firebase';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  personalForm: FormGroup;
  ref = firebase.database().ref('Info/');
  showForm = false;
	matcher: ErrorStateMatcher
	positions: any[] = ["left","right","both"];

	constructor(private  authService:  AuthService, private formBuilder: FormBuilder, private myErrorStateMatcher: ErrormatcherService ) {
  	this.matcher = new ErrormatcherService();
	}
  ngOnInit() {
  	this.personalForm = this.formBuilder.group({
  		'name' : ['', Validators.required],
  		'surname' : ['', Validators.required],
  		'position' : ['', Validators.required],
  		'nickname' : ['', Validators.required],
      'level' : ['', Validators.required],
      'email' : [{value: '', disabled: true}, Validators.required]
    });
  	this.showForm = this.authService.isLoggedIn;
  	if(this.showForm){
  		var loggedUser = this.authService.getUserLoggedIn();
  		this.ref.child(loggedUser.uid).on("value", x=>{
  			var objectToShow = null;
  			if(x.val()){
  				objectToShow = x.val();
  			} else {
  					var newRef = this.ref.child(`${loggedUser.uid}`);
  					objectToShow = { name:'', surname:'', position:'right', nickname:'',level:1, email: loggedUser.email};
  					newRef.set(objectToShow);
  			}

  			this.personalForm.setValue(objectToShow);
				
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
  		var loggedUser = this.authService.getUserLoggedIn();
			var updateRef = this.ref.child(`${loggedUser.uid}`);
			console.log(personalInfo);
  		updateRef.update(personalInfo, (err)=>{
        if(err){
          console.log("Home: onFormSubmit: err");
          console.log(err)
        } else {
          alert("Le modifiche sono state salvate!");   
        }
      });
      
  	}
  }
}
