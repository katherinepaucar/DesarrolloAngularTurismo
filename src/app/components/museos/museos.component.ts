import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements OnInit {
  museos: any=[
    {id:1,nombre:'Museo del Prado'},
    {id:2,nombre:'Reina Sofia'},
    {id:3,nombre:'Biblioteca Nacional'},
    {id:4,nombre:"Museo Thyssen"},
    {id:5,nombre:'Real academia de Bellas Artes de San Fernando'},
    {id:6,nombre:'Museo Arqueológico'},
    {id:7,nombre:'Museo de Ciencias Naturales'},
    {id:8,nombre:'Museo del Traje'},
    {id:9,nombre:'Museo de Ciencias y Tecnologia'},
    {id:10,nombre:'Museo de Lope de Vega'},
    {id:11,nombre:'Museo de cera'},
    {id:12,nombre:'Museo de dibujo e ilustracción'},
    {id:13,nombre:'Museo de la imprenta'},
    {id:14,nombre:'Museo Naval'},
    {id:15,nombre:'Museo Sorolla'},
    {id:16,nombre:'Museo Ilusion'}




  ];
  constructor() { }

  ngOnInit(): void {
  }

}
