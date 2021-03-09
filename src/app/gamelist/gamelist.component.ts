import { Component, OnInit } from '@angular/core';
import { GamesService } from  '../games/games.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  selectedFilters: any[] = [];
  games: any[] = [];

  constructor(private gameService: GamesService) {

    console.log("Calling GetGames")
  
    this.games = this.gameService.getGames(); 
    console.log(this.games)
  }

  ngOnInit(): void {
  }

 

}
