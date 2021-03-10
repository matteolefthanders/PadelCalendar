import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  userRef = firebase.database().ref('Info/');

  constructor(private router: Router) {}

  public getPlayerFromId(uid){
  	var returnString = "";
  	this.userRef.child(uid).on("value", x=>{
		if(x.val()){
			var obj = x.val();
			if(obj.name && obj.surname){
				returnString = `${obj.name} ${obj.surname}`;
				returnString = returnString.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
			} else if (obj.nickname) {
				returnString = obj.nickname.trim();
			} else {
				returnString = obj.email.trim().toLowerCase();
			}
			if(obj.level)
				returnString = `${returnString} (${obj.level})`;
		}
	});

	return returnString;

  }
}
