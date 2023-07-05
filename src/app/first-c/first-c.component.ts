import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FIRSTCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      series: [800000, 115000, 101000, 115000, 40000,20000],
      labels: ['Active Now', 'Pending', 'Reported', 'Invited', 'Suspended', 'Banned'],
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
            }
          }
        }
      ]
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    
  }

}
