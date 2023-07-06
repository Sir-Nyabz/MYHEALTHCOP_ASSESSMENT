import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApexOptions } from 'apexcharts';

// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-second-c',
  templateUrl: './second-c.component.html',
  styleUrls: ['./second-c.component.css']
})
export class SECONDCComponent implements AfterViewInit,OnInit,OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

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
          data: ['12K', '15K', '14K', '19K', '20K', '18K', '23K']
        }
      ],
      chart: {
        type: 'line',
        height: 350,
        innerWidth:400,
        toolbar:{
          show:false
        }
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07']
      }
    };

    const chart = new ApexCharts(document.querySelector('.chart2'), options);
    chart.render();

  }

}