import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  selectedFilters: any[] = [];
  games: any[] = [];

  constructor() {

    this.games = [{
      date: "2021-03-08T20:10",
      place: "Padel Tivoli Terme",
      player1: "keKxPSe1gfRyCF4680kq3gLDDJi1",
      state: "open"
    },{
      date: "2021-03-10T22:00",
      place: "Borghesiana",
      player1: "keKxPSe1gfRyCF4680kq3gLDDJi1",
      player2: "",
      player3: "",
      player4: "",
      state: "closed"
    }]

  }

  ngOnInit(): void {
  }

 

}
