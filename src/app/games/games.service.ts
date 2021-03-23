import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import firebase from 'firebase';
import { AuthService } from  '../auth/auth.service';
import { InfoService } from  '../info/info.service';
import { FiltersService } from  '../utilities/filters.service';
FiltersService
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:  'root'
})

export class GamesService {
  private dateOptions = { 'weekday': 'long', 'month': '2-digit', 'day': '2-digit', 'hour': '2-digit','minute': '2-digit',};
  ref = firebase.database().ref('Games/');
  private _games = new BehaviorSubject<any[]>([]);
  public readonly games = this._games.asObservable();
  private dataStore: { games: any[] } = { games: [] };


  constructor(private filtersService: FiltersService, private  authService:  AuthService, private  infoService:  InfoService, private router: Router) {
        this.getGames();
  }

	compare(a, b) {
	  if (a.date < b.date) {
	    return -1;
	  }
	  if (a.date > b.date) {
	    return 1;
	  }
	  return 0;
	}
	  
  partecipateGame(gameObj){
	if(this.authService.isLoggedIn){
  		var loggedUser = this.authService.getUserLoggedIn();
  		var that = this;
		this.ref.child(gameObj.id).on("value", function(snapshot) {
		    if(snapshot.val()){
		    	if(!that.filtersService.amIAlreadyPartecipateGame(snapshot.val(), loggedUser.uid)){
		    		var updateRef = that.ref.child(gameObj.id);
		    		var playerPosition = that.filtersService.getFirstFreePosition(snapshot.val());
		    		console.log(playerPosition);
		    		if(playerPosition){
		    			var updateObj = {}
		    			if(playerPosition=="player4"){
		    				updateObj["state"]="closed"
		    			} 
		    			updateObj[playerPosition]=loggedUser.uid;
    			  		updateRef.update(updateObj);
		    		}
		    	}
		    }
		});
  	}

  }

  getMyGames(){
	var gameResult = [];

  	if(this.authService.isLoggedIn){
  		var loggedUser = this.authService.getUserLoggedIn();
  		var that = this;
		this.ref.on("value", function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		    	if(that.filtersService.isValidDateGame(childSnapshot.val()) && that.filtersService.amIAlreadyPartecipateGame(childSnapshot.val(), loggedUser.uid)){
					var gameObj = {};
					gameObj['id'] = childSnapshot.key;
					gameObj['date'] = new Date(childSnapshot.val().date).toLocaleString('it-IT', that.dateOptions);
					gameObj['place'] = childSnapshot.val().place;
					gameObj['state'] = childSnapshot.val().state;
					gameObj['player1'] = that.infoService.getPlayerFromId(childSnapshot.val().player1);
					gameObj['player2'] = (childSnapshot.val().hasOwnProperty("player2"))?that.infoService.getPlayerFromId(childSnapshot.val().player2):"";
					gameObj['player3'] = (childSnapshot.val().hasOwnProperty("player3"))?that.infoService.getPlayerFromId(childSnapshot.val().player3):"";
					gameObj['player4'] = (childSnapshot.val().hasOwnProperty("player4"))?that.infoService.getPlayerFromId(childSnapshot.val().player4):"";
		      		gameObj['join'] = false;
		      		gameResult.push(gameObj);
	      		}
			});

		});
  		
  	}

    this.dataStore.games = gameResult.sort(this.compare);
    this._games.next(Object.assign({}, this.dataStore).games);
  }

  getOpenGames(){
  	var gameResult = [];

  	if(this.authService.isLoggedIn){
  		var loggedUser = this.authService.getUserLoggedIn();
  		var that = this;
		this.ref.on("value", function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		    	if(that.filtersService.isValidDateGame(childSnapshot.val()) && childSnapshot.val().state=='open'){
					var gameObj = {};
					gameObj['id'] = childSnapshot.key;
					gameObj['date'] = new Date(childSnapshot.val().date).toLocaleString('it-IT', that.dateOptions);
					gameObj['place'] = childSnapshot.val().place;
					gameObj['state'] = childSnapshot.val().state;
					gameObj['player1'] = that.infoService.getPlayerFromId(childSnapshot.val().player1);
					gameObj['player2'] = (childSnapshot.val().hasOwnProperty("player2"))?that.infoService.getPlayerFromId(childSnapshot.val().player2):"";
					gameObj['player3'] = (childSnapshot.val().hasOwnProperty("player3"))?that.infoService.getPlayerFromId(childSnapshot.val().player3):"";
					gameObj['player4'] = (childSnapshot.val().hasOwnProperty("player4"))?that.infoService.getPlayerFromId(childSnapshot.val().player4):"";
		      		gameObj['join'] = !(that.filtersService.amIAlreadyPartecipateGame(childSnapshot.val(), loggedUser.uid)||childSnapshot.val().state=="closed");
		      		gameResult.push(gameObj);
	      		}
			});

		});
  		
  	}

    this.dataStore.games = gameResult.sort(this.compare);
    this._games.next(Object.assign({}, this.dataStore).games);
  }

  getGames(){
	var gameResult = [];
  	if(this.authService.isLoggedIn){
  		var loggedUser = this.authService.getUserLoggedIn();
  		var that = this;
		this.ref.on("value", function(snapshot) {
		    snapshot.forEach(function(childSnapshot) {
		    	
		    	if(that.filtersService.isValidDateGame(childSnapshot.val())){
					var gameObj = {};
					gameObj['id'] = childSnapshot.key;
					gameObj['date'] = new Date(childSnapshot.val().date).toLocaleString('it-IT', that.dateOptions);
					gameObj['place'] = childSnapshot.val().place;
					gameObj['state'] = childSnapshot.val().state;
					gameObj['player1'] = that.infoService.getPlayerFromId(childSnapshot.val().player1);
					gameObj['player2'] = (childSnapshot.val().hasOwnProperty("player2"))?that.infoService.getPlayerFromId(childSnapshot.val().player2):"";
					gameObj['player3'] = (childSnapshot.val().hasOwnProperty("player3"))?that.infoService.getPlayerFromId(childSnapshot.val().player3):"";
					gameObj['player4'] = (childSnapshot.val().hasOwnProperty("player4"))?that.infoService.getPlayerFromId(childSnapshot.val().player4):"";
		      		gameObj['join'] = !(that.filtersService.amIAlreadyPartecipateGame(childSnapshot.val(), loggedUser.uid)||childSnapshot.val().state=="closed");
		      		gameResult.push(gameObj);
	      		}
			});

		});
  		
  	}

    this.dataStore.games = gameResult.sort(this.compare);
    this._games.next(Object.assign({}, this.dataStore).games);
  }
}
