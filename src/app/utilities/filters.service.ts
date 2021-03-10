import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() {}

  isValidDateGame(gameObj): boolean{
  	return  new Date(gameObj.date) >= new Date(Date.now());
  }

  amIAlreadyPartecipateGame(gameObj,uid): boolean{
  	var result = false;
  	if(gameObj.player1 == uid)
  		result = true;
  	if(gameObj.hasOwnProperty("player2")){
  		if(gameObj.player2 == uid)
  			result = true;
  	}
  	if(gameObj.hasOwnProperty("player3")){
  		if(gameObj.player3 == uid)
  			result = true;
  	}
  	if(gameObj.hasOwnProperty("player4")){
  		if(gameObj.player4 == uid)
  			result = true;
  	}

  	return result;
  }

  getFirstFreePosition(gameObj){
  	var resultString = null;
  	if(!gameObj.hasOwnProperty("player2")){
  		resultString = "player2";
  	} else if(!gameObj.hasOwnProperty("player3")){
  		resultString = "player3";
  	} else if(!gameObj.hasOwnProperty("player4")){
  		resultString = "player4";
  	}
  	return resultString;
  }

   

}
