import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {
  selectable: boolean = true;

  filters = [
    { name: 'Mie' },
    { name: 'Aperte' },
    { name: 'Chiuse' }
  ];

  selectedFilters: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

 

}
