import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIO } from 'src/app/config/config';
import { map } from "rxjs/operators";
import sweetAlert from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
   }

   estaLogueado()   {
     return (this.token.length > 5) ? true : false;
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
     }else{
      this.token = '';
      this.usuario = null;
     }
   }

   guardarStorage(id: string, token: string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.token = token;
    this.usuario = usuario;
   }

   logout(){
      this.usuario = null;
      this.token = '';
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigate(['/login']);
   }

   loginGoogle( token: string ) {

    let url = URL_SERVICIO + '/login/google';

    return this.http.post( url, { token } )
                .pipe(map( (resp: any) => {
                  this.guardarStorage( resp.id, resp.token, resp.usuario );
                  return true;
                }));


  }

   login(usuario: Usuario, recordar:boolean=false){

      if(recordar){
        localStorage.setItem('email', usuario.email);
      }else{
        localStorage.removeItem('email');
      }

      let url = URL_SERVICIO + '/login';
      return this.http.post(url, usuario)
      .pipe(map((resp:any)=>{
         
          this.guardarStorage(resp.id, resp.token, resp.usuario);
            

            return resp;
      }));
   }

   crearUsuario(usuario: Usuario){
      let url = URL_SERVICIO + '/usuario';
      return this.http.post(url, usuario)
            .pipe(map((resp: any) =>{
              sweetAlert('Usuario Creado',usuario.email, 'success');
              return resp.usuario;
            }));
   }
}
