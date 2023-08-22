import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_ghanaLow from '@amcharts/amcharts4-geodata/ghanaLow';
import * as am4charts from "@amcharts/amcharts4/charts";
import { gahanaMapData } from './dummy-data/ghana-map-data';




@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FIRSTCComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {    
  }


  ngAfterViewInit() {
      //PIE CHART
      // Create chart instance
      const chart1 = am4core.create('chartdiv1a', am4charts.PieChart);
  
      // Add data
      chart1.data = [
        {
          country: 'Active',
          litres: 800000
        },
        {
          country: 'Pending',
          litres: 115000
        },
        {
          country: 'Reported',
          litres: 101000
        },
        {
          country: 'Invited',
          litres: 115000
        },
        {
          country: 'Suspended',
          litres: 40000
        },
        {
          country: 'Banned',
          litres: 20000
        }
      ];
  
      // Add and configure Series
      const pieSeries = chart1.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.ticks.template.disabled = false;
  pieSeries.alignLabels = false;
  pieSeries.labels.template.text = "";
  pieSeries.labels.template.radius = am4core.percent(-40);
  pieSeries.labels.template.fill = am4core.color("white");
  
  chart1.legend = new am4charts.Legend();
  chart1.legend.position = "right";


    //GHANA MAP
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
    polygonTemplate.propertyFields.id = "{name}:{id}";
    polygonTemplate.fill = am4core.color('#19105e');

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#554d8c');

     //legend
     chart.legend = new am4maps.Legend();
     chart.legend.position = "left";

    // Default heat map, uses specified color to populate map
    polygonSeries.heatRules.push({
      "property": "fill",
      "target": polygonSeries.mapPolygons.template,
      "min": am4core.color("#e5e6f6"),
      "max": am4core.color("#080c64"),
      "logarithmic": true
    });

    polygonSeries.data = gahanaMapData;

    polygonTemplate.propertyFields.fill = "fill";
  }

}
