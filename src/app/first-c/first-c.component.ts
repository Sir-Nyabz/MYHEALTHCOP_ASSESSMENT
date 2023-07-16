import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_ghanaLow from '@amcharts/amcharts4-geodata/ghanaLow';
import { gahanaMapData } from './dummy-data/ghana-map-data';
// @ts-ignore
import ApexCharts from 'apexcharts';



@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FIRSTCComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      dataLabels:{
        enabled:false
      },
      
      series: [800000, 115000, 101000, 115000, 40000,20000],
      labels: ['Active Now', 'Pending', 'Reported', 'Invited', 'Suspended', 'Banned'],
      text:['800K', '115K', '101K', '115K', '40K', '20K'],
      chart: {
        type: 'pie',
        width: 450,
        //show:false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 600,
              innerHeight:700
            }
          }
        }
      ]
    };

    const chart = new ApexCharts(document.querySelector('#chartdiv1a'), options);
    chart.render();
    
    


    
  }


  ngAfterViewInit() {
    const chart = am4core.create('chartdiv1b', am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_ghanaLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Exclude Antarctica
    polygonSeries.exclude = ['AQ'];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.fill = am4core.color('#19105e');

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#554d8c');

    // Default heat map, uses specified color to populate map
    polygonSeries.heatRules.push({
      "property": "fill",
      "target": polygonSeries.mapPolygons.template,
      "min": am4core.color("#19105e"),
      "max": am4core.color("#554d8c"),
      "logarithmic": true
    });

    polygonSeries.data = gahanaMapData;

    polygonTemplate.propertyFields.fill = "fill";
  }

}
