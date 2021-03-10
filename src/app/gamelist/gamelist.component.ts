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
    this.games = this.gameService.getGames(); 
  }

  ngOnInit(): void {
  }

  onMineSelected(){
    console.log("onMineSelected: called")
    this.games = this.gameService.getMyGames();
  }
  
  onOpenSelected(){
    console.log("onOpenSelected: called")
    this.games = this.gameService.getOpenGames();
  }
  
  onAllSelected(){
    console.log("onAllSelected: called")
    this.games = this.gameService.getGames(); 
  }


}
