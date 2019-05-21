import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
//esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
declare function init_plugins();

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  constructor(public router: Router, public _usuarioService: UsuarioService) {

  }

  ngOnInit() {
    //esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
    init_plugins();
    
    this.email = localStorage.getItem('email') || '';

    if(this.email.length > 1){
      this.recuerdame = true;
    }

  }

  ingresar(forma: NgForm){

    if(forma.invalid){
      return ;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame)
                .subscribe((resp)=>{
                  // console.log(resp);
                  this.router.navigate(['/dashboard']);  
                });

  }
}
