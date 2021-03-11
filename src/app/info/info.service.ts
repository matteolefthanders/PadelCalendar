import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  userRef = firebase.database().ref('Info/');
  private _equipo = new BehaviorSubject<any[]>([]);
  public readonly equipo = this._equipo.asObservable();
  private dataStore: { equipo: any[] } = { equipo: [] };



  constructor(private router: Router) {
  	this.getEquipo();
  }

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

  getEquipo(){
  	var equipo = [];
  	this.userRef.on("value", snap=>{
		snap.forEach(x=>{
			if(x.val()){
				var obj = {
					email: x.val().email,
					level:  x.val().level,
					name:  x.val().name,
					nickname:  x.val().nickname,
					position:  x.val().position,
					surname:  x.val().surname,
					id: x.key
				}
				equipo.push(obj);
			}
		})
	});
	this.dataStore.equipo = equipo;
    this._equipo.next(Object.assign({}, this.dataStore).equipo);  }
}
