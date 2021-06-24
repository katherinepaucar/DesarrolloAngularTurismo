import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GastroService } from 'src/app/services/gastro.service';
import { LoginService } from 'src/app/services/login.service';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';
import {first,tap} from 'rxjs/operators'


@Component({
  selector: 'app-gastronomia-detalle',
  templateUrl: './gastronomia-detalle.component.html',
  styleUrls: ['./gastronomia-detalle.component.css']
})
export class GastronomiaDetalleComponent implements OnInit {

 idParam:string='';
 platosdetalle:any;

 platoForm = new FormGroup({
   nombre: new FormControl('',Validators.required),
   img: new FormControl('',Validators.required),
   detalle: new FormControl('',Validators.required)

 });

 platoFormNuevo = new FormGroup({
  nombre: new FormControl('',[Validators.required, Validators.minLength(5)]),
  img: new FormControl('',[Validators.required, Validators.minLength(5)]),
  detalle: new FormControl('',[Validators.required, Validators.minLength(5)])

});
autenticado =this.loginService.autenticado;
//usuario =this.loginService.getUsuario();

  //Dentro del componente detalle recogemos el valor de la ruta en que estas

   constructor(private route:ActivatedRoute, private gastroService: GastroService, private loginService: LoginService, private router:Router){
    this.idParam=this.route.snapshot.queryParams.idParam;
    //console.log(this.idParam);
   }

 
   /* Formularios*/

   insertar(){
     if (this.platoFormNuevo.valid){
      this.gastroService.altaPlato(this.platoFormNuevo.value).then(()=>{
        alert("Añadido Correctamente");
        this.platoFormNuevo.reset();
       }, (error)=>{
         console.log(error);
       } );
     }else{
       alert('no valido');
     }

   }
   guardarModificacion(){
     this.gastroService.updatePlato(this.idParam,this.platoForm.value).then(()=>{
       alert("Registro Modificado");
    
     }, (error) =>{
       console.log(error);
     });
   }
 
   borrar(){
     this.gastroService.borrarPlato(this.idParam).then(()=>{
      alert("Registro Eliminado");
      //Redirigimos a otra pagina
     this.router.navigate(['/gastronomia']);
    
      }, (error) =>{
      console.log(error);
    });
   }
  
ngOnInit() {
 
   
  this.gastroService.getPlato(this.idParam).subscribe((datos) => {

      this.platosdetalle=datos.payload.data();

      ///Formulario datos
      this.platoForm.setValue({
        nombre:datos.payload.data()['nombre'],
        img:datos.payload.data()['img'],
        detalle:datos.payload.data()['detalle'],
      });
    //console.log(this.platosdetalle['nombre']);
    // *ngIf="platosdetalle" Incluimos este dato en html porque los datos son asincronos
    
  });

  
 
}

//el ngIf del HTML

get nombre(){ return this.platoFormNuevo.get('nombre')};
get img(){ return this.platoFormNuevo.get('img')};
get detalle(){ return this.platoFormNuevo.get('detalle')};

logOutA(){
  this.loginService.logOut().then(() =>{
    
    alert("Has cerrado sesión");
     this.loginService.autenticado=false;
   this.router.navigate(['/gastronomia']);
   console.log('Autenticado:' +this.loginService.autenticado);
  }, (error) =>{
    console.log(error);
  });
}


}
