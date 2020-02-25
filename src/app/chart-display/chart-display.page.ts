import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.page.html',
  styleUrls: ['./chart-display.page.scss'],
})
export class ChartDisplayPage implements OnInit {

  private chart: am4charts.XYChart;

  constructor(private http: HttpClient, private nativeHttp: HTTP, public modalController: ModalController, private zone: NgZone, public nav: NavController, public loadingController: LoadingController ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
    screen.orientation.unlock();
  }

  async ngAfterViewInit(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });
    this.zone.runOutsideAngular(async () => {
      await screen.orientation.lock("landscape");
      await loading.present();
      am4core.unuseTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.padding(0, 15, 0, 15);
      
      chart.leftAxesContainer.layout = "vertical";

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.ticks.template.length = 8;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.ticks.template.disabled = false;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
      dateAxis.renderer.minLabelPosition = 0.01;
      dateAxis.renderer.maxLabelPosition = 0.99;
      dateAxis.keepSelection = true;
      dateAxis.minHeight = 30;
      
      dateAxis.groupData = true;
      dateAxis.minZoomCount = 5;
      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.zIndex = 1;
      valueAxis.renderer.baseGrid.disabled = true;
      // height of axis
      valueAxis.height = am4core.percent(85);
      
      valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.verticalCenter = "bottom";
      valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
      
      valueAxis.renderer.fontSize = "0.8em";
      
      let series = chart.series.push(new am4charts.LineSeries());
      let nativeCall = this.nativeHttp.get('https://www.moneyworks4me.com/company/chart/html-chart-data?bsecode=500325&date=20200224111435&_='+ (new Date()).getTime(), {}, {
        'Content-Type': 'text/csv'
      });
      
      from(nativeCall).pipe().subscribe(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        series.dataSource.processData(data.data, "CSV");
      },
      error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      series.dataSource.parser = new am4core.CSVParser();
      (<am4core.ICSVOptions>series.dataSource.parser.options).useColumnNames = false;
      
      series.dataFields.dateX = "col0";
      series.dataFields.valueY = "col2";
      //series.tooltipText = "{valueY.value}";
      series.name = "Reliance Industries - Closing Price: ";
      series.legendSettings.valueText = "{valueY.value}";
      series.defaultState.transitionDuration = 0;
      series.stroke = am4core.color("#0000ff");
      series.fillOpacity = 0.4;
      
      let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      // height of axis
      valueAxis2.height = am4core.percent(35);
      valueAxis2.zIndex = 3;
      // Makes gap between panels
      valueAxis2.marginTop = 30;
      valueAxis2.renderer.baseGrid.disabled = true;
      valueAxis2.renderer.inside = true;
      valueAxis2.renderer.labels.template.verticalCenter = "bottom";
      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
      valueAxis2.renderer.fontSize = "0.8em";
      
      valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
      
      let series2 = chart.series.push(new am4charts.ColumnSeries());
      let nativeCall2 = this.nativeHttp.get('https://www.moneyworks4me.com/company/chart/html-chart-data?bsecode=500325&date=20200224111435&_='+ (new Date()).getTime(), {}, {
        'Content-Type': 'text/csv'
      });
      
      from(nativeCall2).pipe().subscribe(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        series2.dataSource.processData(data.data, "CSV");
      },
      error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      series2.dataSource.parser = new am4core.CSVParser();
      (<am4core.ICSVOptions>series2.dataSource.parser.options).useColumnNames = false;
      series2.dataFields.dateX = "col0";
      series2.dataFields.valueY = "col1";
      series2.yAxis = valueAxis2;
      //series2.tooltipText = "{valueY.value}";
      series2.name = "Volume: ";
      series2.legendSettings.valueText = "{valueY.value}";
      series2.groupFields.valueY = "sum";
      series2.defaultState.transitionDuration = 0;

      let series50 = chart.series.push(new am4charts.LineSeries());
      let nativeCall50 = this.nativeHttp.get('https://www.moneyworks4me.com/company/chart/averagedata/days/50/date/20200224/bsecode/500325', {}, {
        'Content-Type': 'text/csv'
      });
      
      from(nativeCall50).pipe().subscribe(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        series50.dataSource.processData(data.data, "CSV");
      },
      error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      //series50.dataSource.url = "https://www.moneyworks4me.com/company/chart/averagedata/days/50/date/20200224/bsecode/500325";
      series50.dataSource.parser = new am4core.CSVParser();
      (<am4core.ICSVOptions>series50.dataSource.parser.options).useColumnNames = false;
      (<am4core.ICSVOptions>series50.dataSource.parser.options).reverse = true;
      series50.dataFields.dateX = "col0";
      series50.dataFields.valueY = "col1";
      //series50.tooltipText = "{valueY.value}";
      series50.name = "50 DMA: ";
      series50.legendSettings.valueText = "{valueY.value}";
      series50.defaultState.transitionDuration = 0;
      series50.fill = am4core.color("brown");
      series50.stroke = am4core.color("brown");
      series50.fillOpacity = 0;

      let series200 = chart.series.push(new am4charts.LineSeries());
      let nativeCall200 = this.nativeHttp.get('https://www.moneyworks4me.com/company/chart/averagedata/days/200/date/20200224/bsecode/500325', {}, {
        'Content-Type': 'text/csv'
      });
      
      from(nativeCall200).pipe().subscribe(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        series200.dataSource.processData(data.data, "CSV");
      },
      error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      //series200.dataSource.url = "https://www.moneyworks4me.com/company/chart/averagedata/days/200/date/20200224/bsecode/500325";
      series200.dataSource.parser = new am4core.CSVParser();
      (<am4core.ICSVOptions>series200.dataSource.parser.options).useColumnNames = false;
      (<am4core.ICSVOptions>series200.dataSource.parser.options).reverse = true;
      series200.dataFields.dateX = "col0";
      series200.dataFields.valueY = "col1";
      //series200.tooltipText = "{valueY.value}";
      series200.name = "200 DMA: ";
      series200.legendSettings.valueText = "{valueY.value}";
      series200.defaultState.transitionDuration = 0;
      series200.fill = am4core.color("orange");
      series200.stroke = am4core.color("orange");
      series200.hidden = true;
      
      chart.cursor = new am4charts.XYCursor();

      chart.legend = new am4charts.Legend();
      chart.legend.position = "top";
      chart.legend.fontSize = 15;
      chart.legend.useDefaultMarker = true;
      const marker = chart.legend.markers.template.children.getIndex(0);
      //marker.cornerRadius(12, 12, 12, 12);
      marker.width = 15;
      marker.height = 15;

      chart.preloader.disabled = true;
      
      /**
       * Setting up external controls
       */
      
      // Date format to be used in input fields
      let inputFieldFormat = "yyyy-MM-dd";
      
      document.getElementById("b1m").addEventListener("click", function() {
        let max = dateAxis.groupMax["day1"];
        let date = new Date(max);
        am4core.time.add(date, "month", -1);
        zoomToDates(date);
      });
      
      document.getElementById("b3m").addEventListener("click", function() {
        let max = dateAxis.groupMax["day1"];
        let date = new Date(max);
        am4core.time.add(date, "month", -3);
        zoomToDates(date);
      });
      
      document.getElementById("b6m").addEventListener("click", function() {
        let max = dateAxis.groupMax["day1"];
        let date = new Date(max);
        am4core.time.add(date, "month", -6);
        zoomToDates(date);
      });
      
      document.getElementById("b1y").addEventListener("click", function() {
        let max = dateAxis.groupMax["day1"];
        let date = new Date(max);
        am4core.time.add(date, "year", -1);
        zoomToDates(date);
      });
      
      document.getElementById("bytd").addEventListener("click", function() {
        let max = dateAxis.groupMax["day1"];
        let date = new Date(max);
        am4core.time.round(date, "year", 1);
        zoomToDates(date);
      });
      
      document.getElementById("bmax").addEventListener("click", function() {
        let min = dateAxis.groupMin["day1"];
        let date = new Date(min);
        zoomToDates(date);
      });
      
      dateAxis.events.on("selectionextremeschanged", function() {
        updateFields();
      });
      
      dateAxis.events.on("extremeschanged", updateFields);
      
      function updateFields() {
        let minZoomed = dateAxis.minZoomed + am4core.time.getDuration(dateAxis.mainBaseInterval.timeUnit, dateAxis.mainBaseInterval.count) * 0.5;
        (<HTMLInputElement>document.getElementById("fromfield")).value = chart.dateFormatter.format(minZoomed, inputFieldFormat);
        (<HTMLInputElement>document.getElementById("tofield")).value = chart.dateFormatter.format(new Date(dateAxis.maxZoomed), inputFieldFormat);
      }
      
      document.getElementById("fromfield").addEventListener("keyup", updateZoom);
      document.getElementById("tofield").addEventListener("keyup", updateZoom);
      
      let zoomTimeout;
      function updateZoom() {
        if (zoomTimeout) {
          clearTimeout(zoomTimeout);
        }
        zoomTimeout = setTimeout(function() {
          let start = (<HTMLInputElement>document.getElementById("fromfield")).value;
          let end = (<HTMLInputElement>document.getElementById("tofield")).value;
          if ((start.length < inputFieldFormat.length) || (end.length < inputFieldFormat.length)) {
            return;
          }
          let startDate = chart.dateFormatter.parse(start, inputFieldFormat);
          let endDate = chart.dateFormatter.parse(end, inputFieldFormat);
      
          if (startDate && endDate) {
            dateAxis.zoomToDates(startDate, endDate);
          }
        }, 500);
      }
      
      function zoomToDates(date) {
        let min = dateAxis.groupMin["day1"];
        let max = dateAxis.groupMax["day1"];
        dateAxis.keepSelection = true;
      
        dateAxis.zoom({start:(date.getTime() - min)/(max - min), end:1});
      }
    this.chart = chart;
    });
    await loading.onDidDismiss();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
