import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ChartsModule]
})
export class PagesModule {}
//exports: [DashboardComponent, ProgressComponent, Graficas1Component]
//para que otros modulos lo puedan accesar, sino solo es visible solo dentro de este modulo
// POR EJEMPLO PagesComponent NO lo podemos acceder desde afuera
