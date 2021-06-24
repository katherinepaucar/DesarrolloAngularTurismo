import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';

@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css']
})
export class MuseoDetalleComponent implements OnInit {
  id: number=0;
  museo: Museo=null; //en mayusculas es la Interface, un objeto
//importar interface Museo
  museos: Museo[]=[
    {id:1,nombre:'Museo del Prado',telefono:'913 30 28 00',direccion:'Calle de Ruiz de Alarcón, 23, 28014 Madrid',horario:'10:00 – 20:00',imagen:'../../../assets/Museo_del_Prado.jpg',web:'https://www.museodelprado.es/',coordenadas:[40.4137818,-3.6921271],precio:15,abierto:true},
    {id:2,nombre:'Reina Sofia' ,telefono:'917741000',direccion:'Calle Santa Isabel',horario:'Cierra a las 21:00',imagen:'../../../assets/reinasofiamuseo.jpg',web:'https://www.museoreinasofia.es/',coordenadas:[40.408644,-3.693992],precio:15,abierto:true },
    {id:3,nombre:'Biblioteca Nacional',telefono:'91 516 89 67 / 91 580 77 59',direccion:'Paseo de Recoletos, 20-22. 28071. Madrid.',horario:'1De Martes a Sabado de 10 a 20 h. Domingos de 10 a 14 h.',imagen:'../../../assets/Biblioteca_Nacional.jpg',web:'museo@bne.es',coordenadas:[40.42348498519113, -3.6910447306827954],precio:0,abierto:true},
    {id:4,nombre:"Museo Thyssen",telefono:'917911370',direccion:"Paseo del Prado, 8",horario:'10:00 a 19:00',imagen:'../../../assets/thyssen1.jpg',web:'https://www.museothyssen.org/',coordenadas:[40.416137331924666, -3.694930865545187],precio:13,abierto:true},
    {id:5,nombre:'Real academia de Bellas Artes de San Fernando',telefono:'+34 91-524 08 64',direccion: 'Alcalá, 13 28014 Madrid',horario:'Martes a domingo de 10:00 a 15:00 horas, incluyendo festivos. Lunes cerrado.',imagen:'../../../assets/realacademia.jpg',web:'https://www.realacademiabellasartessanfernando.com/es',coordenadas:[40.4180405,-3.7029775],precio:8,abierto:true},
    {id:6,nombre:'Museo Arqueológico',telefono:'915777912',direccion:'Calle de Serrano, 13, 28001 Madrid',horario:'9:30–20:00',imagen:'../../../assets/museo-arqueologico.jpg',web:'http://www.man.es/man/home.html', coordenadas:[40.423553,-3.689402], precio:3,abierto: true},
    {id:7,nombre:'Museo de Ciencias Naturales',telefono: '914111328',direccion: 'C/José Gutierrez Abascal',horario: '10.00 a 17.00',imagen:'../../../assets/museo-ciencias.jpg',web: 'www.mncn.csic.es/es',coordenadas: [40.4404062, -3.6912279],precio: 7,abierto: true},
    {id:8,nombre:'Museo del Traje',telefono:'+34 91 550 47 00',direccion:'Avenidade Juan de Herrera, 228040',horario:'Mar-Sáb: 9:30-19:00 h; Dom-Fest: 10:00-15:00 h Jueves (julio y agosto): 9:30 – 22:30 h',imagen:'../../../assets/Museo-del-Traje.jpg',web:'http://www.culturaydeporte.gob.es/mtraje/inicio.html',coordenadas:[40.4400972,-3.7318693],precio:3,abierto:true},
    {id:9,nombre:'Museo de Ciencias y Tecnologia',telefono:'914250919',direccion:'Parque de Andalucia. C/Pintor Velázquez,5 28100 Alcobendas, Madrid',horario:'11:00-19:00',imagen:'../../../assets/pruebamuseo.jpg',web:'http://www.muncyt.es/',coordenadas:[40.5375439,-3.643642],precio:3.0,abierto:true},
    {id:10,nombre:'Museo de Lope de Vega', telefono:'914299216',direccion:'Callede Cervantes, 11,28014 Madrid',horario:'Mar-Dom: 10:00 - 18:00',imagen:'../../../assets/Casa-Museo-Lope.jpg',web:'http://casamuseolopedevega.org/es/',coordenadas:[40.3980385,-3.7054334],precio: 0,abierto:true}, 
    {id:11,nombre:'Museo de cera',telefono:'+34 91 319 93 30',direccion:'Plaza de Colón, 1', horario:'11:00–19:00',imagen:'../../../assets/Cera02.jpg',web:'https://www.museodecerademadrid.com',coordenadas:[40.4250641,-3.6935975],precio:18,abierto:true},
    {id:12,nombre:'Museo de dibujo e ilustracción',telefono:'+34 91 758 83 79',direccion:'Amaniel 29-31. 28015 Madrid',horario:'Cerrado Temporalmente',imagen:'../../../assets/realacademia.jpg',web:'https://museo.abc.es/',coordenadas:[40.4276904,-3.7117588],precio:0,abierto:false},
    {id:13,nombre:'Museo de la imprenta',telefono:'914294881',direccion:'28012, Calle de Concepción Jerónima, 15, 28012 Madrid',horario:'10:00-20:00',imagen:'../../../assets/pruebamuseo.jpg',web:'https://museomadrid.com/imprenta-municipal-artes-del-libro/', coordenadas:[40.4138972,-3.7054722], precio: 0,abierto: true},
    {id:14,nombre:'Museo Naval',telefono:'(+34) 91 523 85 16',direccion:'Paseo del Prado, 3 28014  ',horario:'Mar - Dom: 10:00 - 19:00 h ',imagen:'../../../assets/pruebamuseo.jpg',web:'https://www.esmadrid.com/informacion-turistica/museo-naval', coordenadas:[40.41851257605143, -3.6928194306791697 ], precio: 3,abierto: true},
    {id:15,nombre:'Museo Sorolla',telefono:'+34 91 310 15 84',direccion:'Paseo del General Martinez Campos, 37, 28010 Madrid',horario:'9:30-20:00',imagen:'../../../assets/pruebamuseo.jpg',web:'https://www.culturaydeporte.gob.es/msorolla/inicio.html',coordenadas:[40.4354555,-3.6947111],precio:3,abierto:true},
    {id:16,nombre:'Museo Ilusion',telefono:'+34 911 03 34 55',direccion:'Calle del Dr. Cortezo 8',horario:'Cierra a las 22:00',imagen:'../../../assets/pruebamuseo.jpg',web:'https://www.museumofilusions.es',coordenadas:[40.4134667,-3.7060788],precio:15,abierto:true}



  ];
  //Para ver el id que recibo
  constructor(private ruta:ActivatedRoute) {
    //console.log(this.ruta.snapshot.params.codigo);
   this.id=this.ruta.snapshot.params.codigo;
   this.museo=this.buscarMuseo();
   }
   buscarMuseo():Museo{
    //Filtrar el array por aquellos elementos cuyo id sea igual al id recibido como parametro
    //como al filtrar el array me devuelve otro array , me quedo solo con el primer elemento [0]
    return this.museos.filter((item)=>{ 
      return item.id== this.id
    })[0];
  }
  ngOnInit(): void {
  }

}
