import { Component, OnInit } from '@angular/core';
import { GamesService } from  '../games/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  selectedFilters: any[] = [];
  games: Observable<any[]>;
 
  constructor(public gameStore: GamesService) {  
  }

  ngOnInit(): void {
        //this.games = this.gameService.getGames(); 
      this.games = this.gameStore.games;
      this.gameStore.getGames();
  }
  
  onMineSelected(){
    console.log("onMineSelected: called")
    this.gameStore.getMyGames();
  }
  
  onOpenSelected(){
    console.log("onOpenSelected: called")
    this.gameStore.getOpenGames();
  }
  
  onAllSelected(){
    console.log("onAllSelected: called")
    this.gameStore.getGames(); 
  }

  partecipate(obj){
    console.log("partecipate: called")
    console.log(obj)
    this.gameStore.partecipateGame(obj);
    this.gameStore.getMyGames();
  }

}
