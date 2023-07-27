import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_ghanaLow from '@amcharts/amcharts4-geodata/ghanaLow';
import * as am4charts from "@amcharts/amcharts4/charts";

// @ts-ignore
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-second-c',
  templateUrl: './second-c.component.html',
  styleUrls: ['./second-c.component.css']
})
export class SECONDCComponent implements AfterViewInit {
  
  
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
      stroke: {
        dashArray: [0,2]
      },
      xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07']
      }
    };

    const chart1 = new ApexCharts(document.querySelector('.chart2'), options);
    chart1.render();


    

//donut
    //PIE CHART
      // Create chart instance
      const chart = am4core.create('donut1', am4charts.PieChart);
  
      // Add data
      chart.data = [
        {
          country: 'Male',
          litres: 54.5
        },
        {
          country: 'Female',
          litres: 45.5
        }
      ];
  
      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.ticks.template.disabled = true;
  pieSeries.alignLabels = false;
  pieSeries.labels.template.text = "";
  pieSeries.labels.template.radius = am4core.percent(-40);
  pieSeries.labels.template.fill = am4core.color("white");
  
  chart.legend = new am4charts.Legend();
  //chart.legend.position = "";
  chart.innerRadius = am4core.percent(50);
  }

}
