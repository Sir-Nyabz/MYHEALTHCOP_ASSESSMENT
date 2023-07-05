import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-second-c',
  templateUrl: './second-c.component.html',
  styleUrls: ['./second-c.component.css']
})
export class SECONDCComponent implements AfterViewInit,OnInit {

  constructor() { }

  chartOptions!: ApexOptions;
  ngOnInit() {
    this.chartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
      },
      labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
          },
        },
      },
    };
  }

  ngAfterViewInit() {
    const options = {
      series: [
        {
          name: 'Feb',
          data: [12000, 15000, 14889, 19000, 20000, 18779, 23550]
        }
      ],
      chart: {
        type: 'line',
        height: 350,
        innerWidth:400
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07']
      }
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
