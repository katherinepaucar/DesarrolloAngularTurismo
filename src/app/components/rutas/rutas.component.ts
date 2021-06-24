import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/models/ruta';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  rutas:Ruta[]=[];
//inyectamos el servicio
  constructor(private rutasService:RutasService) {
    this.rutas=this.rutasService.getAll();
    //console.log(this.rutas);
   }

  ngOnInit(): void {
  }

}
