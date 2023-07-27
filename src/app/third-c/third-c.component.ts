import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4charts from "@amcharts/amcharts4/charts";
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
  
  
  
  
  //PIE CHART
      // Create chart instance
      const chart1 = am4core.create('chartdiv1', am4charts.PieChart);
  
      // Add data
      chart1.data = [
        {
          country: 'Classes',
          litres: 351
        },
        {
          country: 'Programs',
          litres: 284
        },
        {
          country: 'Events',
          litres: 199
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
