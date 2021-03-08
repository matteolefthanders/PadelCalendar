import { Injectable } from  '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase';

@Injectable({
    providedIn:  'root'
})

export class AuthService {

	user = null;

  constructor(public  router:  Router) { 
		var localUser = firebase.auth().currentUser;
    if (localUser){
      this.user = localUser;
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.setItem('user', null);
    }
	  
  }

  async login(email: string, password: string) {
	  var result = await firebase.auth().signInWithEmailAndPassword(email, password);
		if (result){
      this.user = result.user;
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/home']);
    }   
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await firebase.auth().sendPasswordResetEmail(passwordResetEmail);
  }

  async logout(){
    await firebase.auth().signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
	}

	get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
	}

  getUserLoggedIn(){
    return JSON.parse(localStorage.getItem('user'));
  }

}