import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from 'src/app/models/ruta';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta-detalle',
  templateUrl: './ruta-detalle.component.html',
  styleUrls: ['./ruta-detalle.component.css']
})
export class RutaDetalleComponent implements OnInit {

  ruta:Ruta=null;
  //Inyectamos el servicio
  constructor(private rutasServices:RutasService,
    private route:ActivatedRoute) {
       //ActivatedRoute para recuperar los parametros en rutas
       let id=this.route.snapshot.params.codigo;
       this.ruta=this.rutasServices.buscarRuta(id);
   }

  ngOnInit(): void {

  }

}
