import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) { 
    this.nomePortal = "Portal's name";

    //var servico = new CursosService();

    

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
