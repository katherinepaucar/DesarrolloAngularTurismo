import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from 'src/app/models/ruta';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ubicacion-ruta',
  templateUrl: './ubicacion-ruta.component.html',
  styleUrls: ['./ubicacion-ruta.component.css']
})
export class UbicacionRutaComponent implements OnInit {
  lat:number=0;
  lng:number=0;
  zoom:number=14;
  ruta:Ruta=null;
  //Inyectamos el servicio
  constructor(private rutasServices:RutasService,
    private route:ActivatedRoute) {
       //ActivatedRoute para recuperar los parametros en rutas
       let id=this.route.snapshot.params.codigo;
       this.ruta=this.rutasServices.buscarRuta(id);
       this.lat=this.ruta.coordenadas[0];
       this.lng=this.ruta.coordenadas[1];
   }

  ngOnInit(): void {

  }


}
