import { Component, OnInit } from '@angular/core';
//esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //esto fue un ajuste que se hizo en el archivo custom.js, para que funcionara correctamente el sidebar
    init_plugins();
  }

}
