import { Component, OnInit } from '@angular/core';
import { InfoService } from  '../info/info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'nickname', 'position', 'level'];
  equipo: Observable<any[]>;

  constructor(public infoService: InfoService) { 
  	this.equipo = this.infoService.equipo;
  	this.infoService.getEquipo();
  }

  ngOnInit(): void {
  	this.infoService.getEquipo();
  }

}
