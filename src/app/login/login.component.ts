import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
//esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
declare function init_plugins();

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {
    //esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
    init_plugins();
  }

  ingresar(){
      this.router.navigate(['/dashboard']);  
  }
}
