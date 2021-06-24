import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GastroService {
  //inyectamos el angularFirestore
  constructor(private angularFirestore: AngularFirestore) {}

  public listaGastro(): any {
    return this.angularFirestore.collection('gastronomia_datos').snapshotChanges();
  }
  //Obtener datos de un plato, da como resultado un observable
  public getPlato(documentId: string) {
    return this.angularFirestore.collection('gastronomia_datos').doc(documentId).snapshotChanges();
  }


  public updatePlato(id:string,data:any):any{
    return this.angularFirestore.collection('gastronomia_datos').doc(id).set(data);
  }

  public borrarPlato(id: string): any{
    return this.angularFirestore.collection('gastronomia_datos').doc(id).delete();
  }

  public altaPlato(nuevo:any):any{
    return this.angularFirestore.collection('gastronomia_datos').add(nuevo);
  }


}
