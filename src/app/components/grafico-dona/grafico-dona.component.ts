import { Component, OnInit, Input } from "@angular/core";
import { Label, MultiDataSet } from "ng2-charts";
import { ChartType } from "chart.js";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html"
})
export class GraficoDonaComponent implements OnInit {
  @Input() chartLabels: Label[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  @Input() chartData: MultiDataSet = [[350, 450, 100]];
  @Input() chartType: ChartType = "doughnut";
  constructor() {}

  ngOnInit() {}
}
