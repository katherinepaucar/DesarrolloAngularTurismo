export interface Museo {
    //Indicamos la estructura que va a tener la pagina museo detalle
    id:number,
    nombre: string,
    telefono: string,
    direccion: string,
    horario: string,
    imagen: string,
    web: string,
    coordenadas: number[],
    precio: number,
    abierto: boolean
}
