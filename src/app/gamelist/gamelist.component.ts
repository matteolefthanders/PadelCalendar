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
  }

  ngOnInit(): void {
        this.games = this.gameService.getGames(); 
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

  partecipate(obj){
    console.log("partecipate: called")
    console.log(obj)
    this.gameService.partecipateGame(obj);
  }

}
