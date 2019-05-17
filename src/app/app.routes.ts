import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { RegisterComponent } from "./login/register.component";

//arreglo de rutas
const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NopagefoundComponent }
];

// { path: "",  redirectTo: ''},//cualquier ruta vacia va a redireccionar a dashboard
//{ path: "**", component: NopagefoundComponent }  // cualquier ruta que no sea las anteriores la redirecciona a 404

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
