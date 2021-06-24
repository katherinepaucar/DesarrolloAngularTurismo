import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  autenticado: boolean =false;

  constructor(private angularFireAuth: AngularFireAuth) { }

    login(email:string, pw:string){
      return this.angularFireAuth.signInWithEmailAndPassword(email,pw);
      
    }

    logOut(){
      return this.angularFireAuth.signOut();
  
    }

    comprobar(){
      //propiedad authState
      return this.angularFireAuth.authState;
    }

   

   
}
