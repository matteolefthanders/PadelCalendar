import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import firebase from 'firebase';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  email = '';
  ref = firebase.database().ref('Utenti/');
  matcher = new MyErrorStateMatcher();
  
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  onResetPassword(form: any){
    const emailAddress = form.email;

  	firebase.auth().sendPasswordResetEmail(emailAddress)
  	.then(()=>{
  		alert("ResetPasswordEmail sent");		
  	})
  	.catch(e=>{
  		alert("Error sending ResetPasswordEmail");		
  	})
  }

  onFormSubmit(form: any) {
    const login = form;
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
	.then(()=>{

		firebase.auth().signInWithEmailAndPassword(login.email, login.password)
		.then((userCredential) => {
		    // Signed in
		    var user = userCredential.user;
            this.router.navigate(['/home/'+user.uid]);
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
    })

  }

}
