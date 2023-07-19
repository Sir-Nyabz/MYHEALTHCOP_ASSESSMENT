import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';


@Component({
  selector: 'app-third-c',
  templateUrl: './third-c.component.html',
  styleUrls: ['./third-c.component.css']
})

export class THIRDCComponent implements OnInit, AfterViewInit {

  

  constructor() { }

  ngOnInit(): void {
    const options = {
      dataLabels:{
        enabled:false
      },
      series: [351, 284, 199],
      labels: ['Classes', 'Programs', 'Events'],
      chart: {
        type: 'pie',
        width: 450
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

    const chart = new ApexCharts(document.querySelector('.chart3a'), options);
    chart.render();
  }

  ngAfterViewInit() {
    const options = {
      series: [
        {
          name: 'Feb',
          data: ['12K', '15K', '14K', '19K', '20K', '18K', '23K','24.1K','25K','24.7K','25.2K','26K']
        },
        {
          name: 'Mar',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K','20K','21K','22K','23K','24K'],
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug','Sep','Oct','Nov','Dec']
      }
    };

    const chart = new ApexCharts(document.querySelector('.chart3b'), options);
    chart.render();

  }

}
