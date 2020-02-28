import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-company-shareholding-pattern',
  templateUrl: './company-shareholding-pattern.page.html',
  styleUrls: ['./company-shareholding-pattern.page.scss'],
})
export class CompanyShareholdingPatternPage implements OnInit {

  private chart: am4charts.PieChart;

  constructor( private zone: NgZone ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);
      
      let chart = am4core.create("piechartdiv", am4charts.PieChart);

      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "percent";
      pieSeries.dataFields.category = "label";

      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      pieSeries.colors.list = [
        am4core.color("#DA70D6"),
        am4core.color("#71bbd4"),
        am4core.color("#ffb733")
      ];

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = "bottom";
      chart.legend.labels.template.text = "[bold {color}]{name}[/]";
      chart.legend.valueLabels.template.text = "[{color}]{value.value}%";
      chart.legend.itemContainers.template.togglable = false;

      chart.data = [{
        label: "Promoters",
        percent: 50.03
      },
      {
        label: "Institutions",
        percent: 38.48
      },
      {
        label: "Non-Institutions",
        percent: 11.49
      }];

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
