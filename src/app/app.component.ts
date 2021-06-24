import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idioma:string="es";


 constructor(private translateService:TranslateService){
   this.translateService.use(this.idioma);
 }
 cambiarIdioma(nuevoIdioma:string){
   this.idioma=nuevoIdioma;
   this.translateService.use(this.idioma);
 }

}
