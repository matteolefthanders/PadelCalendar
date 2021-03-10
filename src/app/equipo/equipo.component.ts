import { Component, OnInit } from '@angular/core';
import { InfoService } from  '../info/info.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'nickname', 'position', 'level'];
  equipo: any[] = [];

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
  	this.equipo = this.infoService.getEquipo();
  }

}
