import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubicacion-museo',
  templateUrl: './ubicacion-museo.component.html',
  styleUrls: ['./ubicacion-museo.component.css']
})
export class UbicacionMuseoComponent implements OnInit {

  lat:number=0;
  lng:number=0;
  zoom:number=14;
  //Para recuperar los parametros que hemos enviado a traves del routerlink
  //de ubicacion-detalle.componet.html
  nombre:string="";
  id:number=0;
  direccion:string="";
  constructor(private ruta:ActivatedRoute) { 
    this.lat=parseFloat(this.ruta.snapshot.queryParams.latitud);
    this.lng=parseFloat(this.ruta.snapshot.queryParams.longitud);
    this.id=parseInt(this.ruta.snapshot.queryParams.id);
    this.nombre=this.ruta.snapshot.queryParams.museo;
    this.direccion=this.ruta.snapshot.queryParams.direccion;
  }

  ngOnInit(): void {
  }

}
