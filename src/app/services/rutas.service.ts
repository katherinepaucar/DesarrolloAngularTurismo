import { Injectable } from '@angular/core';
import { Ruta } from '../models/ruta';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  //ver detalles de ruta.ts de las variables declarada
  rutas: Ruta[] = [
    {
      id: 1,
      nombre: 'Ruta Baztan',
      duracion: 2,
      dificultad: 'Baja/Media',
      ubicacion: 'Nuevo Baztán, Olmeda de las Fuentes, Mirador del Balconcillo',
      coordenadas: [40.36601420523865, -3.2427064203065084],
      detalle:
        'Tipo de Ruta: Circular.Recorrido: 9,3 km, Altitud mínima: 716 metros. Altitud máxima: 839metros Fuentes: SI -- Sombras: 5%  Recomendada: evitar días muy calurosos Señalizada: SI (parcialmente) ',
      imagen: '../../../assets/rutas/baztan.jpg',
    },
    {
      id: 2,
      nombre: 'Cascada del Purgatorio',
      duracion: 2,
      dificultad: 'Alta con un desnivel de 315 m',
      ubicacion: 'Monasterio del Paular Rascafria',
      coordenadas: [40.8491773, -3.8622185],
      detalle:
        'Época aconsejada: La mejor época para realizarla es durante el deshielo, cuando las cascadas llevan mayor cantidad de agua.',
      imagen: '../../../assets/rutas/Cascadas_del_Purgatorio.jpg',
    },
    {
      id: 3,
      nombre: 'Embalse del Picadas',
      duracion: 3,
      dificultad: 'Baja',
      ubicacion: 'Pelayos de la presa',
      coordenadas: [40.33324029344716, -4.249197702223924],
      detalle:
        'Tranquila, relajante y bella ruta por el Embalse de Picadas hasta su presa,',
      imagen: '../../../assets/rutas/Picadas..jpg',
    },
    {
      id: 4,
      nombre:'Laguna del Campillo',
      duracion: 2,
      dificultad: 'fácil',
      ubicacion: 'Rivas-Vaciamadrid',
      coordenadas: [40.3207381, -3.5107996],
      detalle: 'Ruta circular, finaliza en un centro medio ambiental.',
      imagen: '../../../assets/rutas/El_Campillo.JPG',
    },
    {
      id: 5,
      nombre: 'Subida al Cancho de la Cabeza',
      duracion: 4,
      dificultad: 'media-alta',
      ubicacion: 'Patones',
      coordenadas: [40.896158, -3.4820799],
      detalle:
        'Ruta de 12km de longitud. Recorrido algo exigente por la distancia, pero muy recomendable por las vistas panorámicas.',
      imagen: '../../../assets/rutas/prueba.jpg',
    },
    {
      id: 6,
      nombre: 'Ruta del Hoyo Cerrado',
      duracion: 6,
      dificultad: 'Media',
      ubicacion: 'Rascafría',
      coordenadas: [40.97408391637272, -3.872846756842427],
      detalle:
        'Es una ruta sencilla que permitirá conocer el único circo glaciar de esta zona',
      imagen: '../../../assets/HoyoCerrado.jpg',
    },
    {
      id: 7,
      nombre:
        'Chorros del Manzanares',
      duracion: 4.5,
      dificultad: 'fácil',
      ubicacion: 'Canto Cochino - Manzanares el Real - Madrid',
      coordenadas: [40.7760645, -3.959401],
      detalle:
        'Un bello recorrido por el río manzanares, los chorros son un conjunto de pequeñas cascadas en hilera, con una bella caída escalonada entre rocas de granito alisadas. Termina en una de las pozas del recorrido, desde donde es posible contemplarlas en un alto rocoso. A la vuelta se puede ver distintas pozas, de una exquisita fragmentación, está prohibido el baño y el barranquismo en la zona. Al llegar a la altura de la Charca Verde descender hasta ella. Se cruza por el puente habilitado para ello, y regresar el tramo final entre pinares de la ladera suroeste del Cancho de los Muertos, que por una PR nos devuelva a Cantocochino.',
      imagen: '../../../assets/rutas/prueba.jpg',
    },
    {
      id: 8,
      nombre: 'La Pedriza',
      duracion: 4,
      dificultad: 'facil',
      ubicacion: 'Manzanares el Real',
      coordenadas: [40.7726009,- 3.8708617],
      detalle:
        'La Pedriza es un gran batolito granítico situado en la vertiente sur de la sierra de Guadarrama, dentro del municipio español de Manzanares el Real,',
      imagen: '../../../assets/rutas/prueba.jpg',
    },
    {
      id: 9,
      nombre: 'Peña Lara',
      duracion: 5,
      dificultad: 'media',
      ubicacion: 'Sierra de Guadarrama - Mirador de Lucio',
      coordenadas: [40.85141209721392, -3.95440407069325],
      detalle:
        'Montaña de gran altura con un parque con lagos, vegetación y fauna, como águilas y buitres.',
      imagen: '../../../assets/rutas/prueba.jpg',
    },

    {
      id: 10,
      nombre: 'Siete Picos',
      duracion: 5,
      dificultad: 'facil',
      ubicacion: 'Navacerrada',
      coordenadas: [40.7816648, -4.0497318],
      detalle:
        'Los Siete Picos es una formación montañosa de la sierra de Guadarrama, en el sistema Central de la península ibérica, situada en el límite entre las provincias españolas de Madrid y Segovia.',
      imagen: '../../../assets/rutas/prueba.jpg',
    },
  ];


  constructor() {}

  public getAll():Ruta[]{
    return this.rutas;
    
  }

  //recibimos un id y devuelve una ruta

  public buscarRuta(id:number): Ruta{
    return this.rutas.filter((item)=>{
     return id == item.id;
    })[0];
//solo nos quedamos el primer elemento, recorriendo
// el array de las rutas. Un filter devuelve una coleccion, solo nos quedamos en un primer elememnto
  }
}
