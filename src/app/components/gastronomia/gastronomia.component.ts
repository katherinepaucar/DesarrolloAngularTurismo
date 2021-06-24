import { Component, OnInit } from '@angular/core';
import { GastroService } from 'src/app/services/gastro.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.css']
})
export class GastronomiaComponent implements OnInit {
  /*Variables a utilizar*/
  platos: any []=null;
 autenticado= this.loginService.autenticado;

  constructor(private gastroService: GastroService, private loginService: LoginService) {  }
  
/*  ngOnInit(): void {
  }*/

  ngOnInit() {
    
    this.gastroService.listaGastro().subscribe((datos) => {
      this.platos = [];
      datos.forEach((element: any) => {
        this.platos.push({
          id:element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
     //console.log(this.platos);
    });
  }
 
  /****** */
 
}
