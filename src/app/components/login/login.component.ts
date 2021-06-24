import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {first,tap} from 'rxjs/operators';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string="";
  email:string="";
  password:string="";
  autenticado =this.loginService.autenticado;
  constructor(private loginService: LoginService, private router: Router) { }

/* LOGIN*/
login(){
 
  this.loginService.login(this.email,this.password).then((data) => {
    //console.log(data);
        /* */
  this.loginService.comprobar().pipe(first()).pipe(
    tap(user => {
      if(user){
       //console.log(user);
        this.usuario=user.email;
        console.log(this.usuario);
       this.loginService.autenticado=true;
        console.log('Autenticado:' +this.loginService.autenticado);
        this.router.navigate(['/gastronomia']);
      } else {
        this.loginService.autenticado = false;
       
      }
    })
).subscribe();
    alert("Usuario autenticado");
    
  }, (error) => {
    console.log(error);
    alert("Usuario no valido");
  });



}


 logOutA(){
  this.loginService.logOut().then(() =>{
    
    alert("Has cerrado sesión");
     this.loginService.autenticado=false;
   this.router.navigate(['/gastronomia']);
   console.log('Autenticado:' + this.loginService.autenticado);
  }, (error) =>{
    console.log(error);
  });
}

  
  ngOnInit(): void {
  }

}
