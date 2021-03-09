import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase';
import { AuthService } from  '../auth/auth.service';
import { InfoService } from  '../info/info.service';


@Injectable({
    providedIn:  'root'
})

export class GamesService {

  ref = firebase.database().ref('Games/');


  constructor(private  authService:  AuthService, private  infoService:  InfoService, private router: Router) {

  }

  

  async getMyGames(){

  }

  async getOpenGames(){

  }

  getGames(){
	var gameResult = [];

  	if(this.authService.isLoggedIn){
  		var loggedUser = this.authService.getUserLoggedIn();
  		var that = this;
		this.ref.on("value", function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {

				var gameObj = {};
				gameObj['id'] = childSnapshot.key;
				gameObj['date'] = childSnapshot.val().date;
				gameObj['place'] = childSnapshot.val().place;
				gameObj['state'] = childSnapshot.val().state;
				gameObj['player1'] = that.infoService.getPlayerFromId(childSnapshot.val().player1);
				gameObj['player2'] = (childSnapshot.val().hasOwnProperty("player2"))?that.infoService.getPlayerFromId(childSnapshot.val().player2):"";
				gameObj['player3'] = (childSnapshot.val().hasOwnProperty("player3"))?that.infoService.getPlayerFromId(childSnapshot.val().player3):"";
				gameObj['player4'] = (childSnapshot.val().hasOwnProperty("player4"))?that.infoService.getPlayerFromId(childSnapshot.val().player4):"";
      		
	      		gameResult.push(gameObj)
			});

		});
  		
  	}
  	return gameResult;

  }
}
