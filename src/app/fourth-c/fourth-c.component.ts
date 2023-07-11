import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { Chart} from 'chart.js';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-fourth-c',
  templateUrl: './fourth-c.component.html',
  styleUrls: ['./fourth-c.component.css']
})
export class FOURTHCComponent implements AfterViewInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const xValues = ["Fitness", "Running", "Tennis", "Aerobics", "Swimming"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["yellow", "yellow", "yellow", "yellow", "yellow"];

    const myChart = new Chart('myChart', {
      type: "horizontalBar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
            barThickness: 24,
          }
        ]
      },
      options: {
          
      }
    });
  }

}
