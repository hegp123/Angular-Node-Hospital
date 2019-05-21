import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//RUTAS
import { APP_ROUTES } from "./app.routes";

//MODULOS
import { PagesModule } from "./pages/pages.module";

//SERVICIOS: dice que es modulo, pero lo que pasa es que aca estan todos los servicios
import { ServiceModule } from "./services/service.module";

//COMPONENTES
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, APP_ROUTES, PagesModule, FormsModule, ReactiveFormsModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
