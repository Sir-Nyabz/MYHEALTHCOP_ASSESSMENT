import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-eighth-c',
  templateUrl: './eighth-c.component.html',
  styleUrls: ['./eighth-c.component.css']
})
export class EIGHTHCComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
    const options = {
      series: [78, 14, 8],
      labels: ['Mobile', 'Desktop', 'Tablet'],
      legend: {
        position: 'bottom'
      },
      chart: {
        type: 'pie',
        width: 380
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: 'bottom'
            },
            percentage:{
              show:false
            }
          }
        }
      ]
    };

    const chart = new ApexCharts(document.querySelector('.chart8a'), options);
    chart.render();
  }

  ngAfterViewInit() {
    const options = {
      series: [
        {
          name: 'Feb',
          data: ['12K', '15K', '14K', '19K', '20K', '18K', '23K']
        },
        {
          name: 'Mar',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
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
      stroke: {
        dashArray: [0,2]
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07']
      }
    };

    const chart = new ApexCharts(document.querySelector('.chart8b'), options);
    chart.render();

  }

}
