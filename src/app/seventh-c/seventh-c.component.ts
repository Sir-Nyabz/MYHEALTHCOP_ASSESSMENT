import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-seventh-c',
  templateUrl: './seventh-c.component.html',
  styleUrls: ['./seventh-c.component.css']
})
export class SEVENTHCComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngOnInit(): void {
    const options = {
      series: [351, 284, 199],
      labels: ['Classes', 'Programs', 'Events'],
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

    const chart = new ApexCharts(document.querySelector('.chart7a'), options);
    chart.render();
  }

  ngAfterViewInit() {
    const options = {
      series: [
        {
          name: 'Direct',
            data: ['12K', '15K', '14K', '19K', '20K', '18K']
         
        },
        {
          name: 'Direct',
            data: ['12K', '15K', '14K', '19K', '20K', '18K','10k']
         
        },
        {
          name: 'Organic Search',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
        }
        ,
        {
          name: 'Social',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
        },
        {
          name: 'Referral',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
        },
        {
          name: 'Other',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
        },
        {
          name: 'Direct',
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
      xaxis: {
        categories: ['Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022']
      }
    };

    const chart = new ApexCharts(document.querySelector('.chart7b'), options);
    chart.render();

  }


}
