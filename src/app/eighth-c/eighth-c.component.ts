import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4charts from "@amcharts/amcharts4/charts";
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
        }
    

  ngAfterViewInit() {
    const options = {
      
      series: [
        {
          name: 'Direct',
          data: ['12K', '15K', '14K', '19K', '20K', '18K', '23K']
        },
        {
          name: 'Organic Search',
          data: ['10K', '13K', '16K', '18K', '19K', '17K', '24K'],
        },
        {
          name: 'Social',
          data: ['20K', '18K', '19K', '22K', '18K', '16K', '22K'],
        },
        {
          name: 'Referral',
          data: ['13K', '14K', '17K', '21K', '17K', '23K', '21K'],
        },
        {
          name: 'Other',
          data: ['18K', '20K', '21K', '20K', '16K', '15K', '20K'],
        },
        {
          name:'',
          data: ['16K', '14K', '15K', '17K', '15K', '14K', '18K'],
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
        dashArray: [0]
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07']
      }
    };

    const chart = new ApexCharts(document.querySelector('.chart8b'), options);
    chart.render();


    //PIE CHART
      // Create chart instance
      const chart1 = am4core.create('chartdiv8', am4charts.PieChart);
  
      // Add data
      chart1.data = [
        {
          country: 'Mobile',
          litres: 78
        },
        {
          country: 'Desktop',
          litres: 14
        },
        {
          country: 'Tablet',
          litres: 8
        }
      ];
  
      // Add and configure Series
      const pieSeries = chart1.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.ticks.template.disabled = true;
  pieSeries.alignLabels = false;
  pieSeries.labels.template.text = "";
  pieSeries.labels.template.radius = am4core.percent(-40);
  pieSeries.labels.template.fill = am4core.color("white");
    
  chart1.legend = new am4charts.Legend();
  }

}
