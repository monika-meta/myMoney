import { Component, OnInit, NgZone } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ModalController, LoadingController, NavController, Platform } from '@ionic/angular';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Event } from '@angular/router';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.page.html',
  styleUrls: ['./chart-display.page.scss'],
})
export class ChartDisplayPage implements OnInit {

  private chart: am4charts.XYChart;
  duration: any;
  ratio = window.devicePixelRatio || 1;
  deviceWidth = screen.width * this.ratio;
  deviceHeight = screen.height * this.ratio;
  chartHeight = (this.deviceHeight)*0.26 + "px";

  constructor( public modalController: ModalController, private zone: NgZone, public nav: NavController, public loadingController: LoadingController, private screenOrientation: ScreenOrientation, private platform: Platform ) { 
    this.duration = "MAX";
   }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async ngAfterViewInit(){
    this.platform.ready().then(()=>{
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    },
    error => {
      console.log(error);
    });
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2500
    });
    this.zone.runOutsideAngular(async () => {
      await loading.present();
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.padding(0, 5, 0, 5);
      
      chart.leftAxesContainer.layout = "vertical";
      chart.preloader.disabled = true;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.ticks.template.length = 8;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.ticks.template.disabled = false;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
      dateAxis.renderer.fontSize = "0.6em";
      dateAxis.tooltip.fontSize = "0.6em";
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
      valueAxis.height = am4core.percent(40);
      
      valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.verticalCenter = "bottom";
      valueAxis.renderer.labels.template.padding(2, 2, 2, 2);
      
      valueAxis.renderer.fontSize = "0.6em";
      
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataSource.url = "assets/data/reliance/chartdata.csv";
      series.dataSource.parser = new am4core.CSVParser();
      (<am4core.ICSVOptions>series.dataSource.parser.options).useColumnNames = false;
      
      series.dataFields.dateX = "col0";
      series.dataFields.valueY = "col2";
      series.tooltipText = "Closing Price: {valueY.value}";
      series.tooltip.fontSize = "0.8em";
      series.name = "Closing Price: ";
      series.legendSettings.valueText = "{valueY.value}";
      series.defaultState.transitionDuration = 0;
      series.stroke = am4core.color("#0000ff");
      series.fillOpacity = 0.4;
      series.hiddenInLegend = true;
      
      let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      // height of axis
      valueAxis2.height = am4core.percent(15);
      valueAxis2.zIndex = 3;
      // Makes gap between panels
      valueAxis2.marginTop = 13;
      valueAxis2.renderer.baseGrid.disabled = true;
      valueAxis2.renderer.inside = true;
      valueAxis2.renderer.labels.template.verticalCenter = "bottom";
      valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
      valueAxis2.renderer.fontSize = "0.6em";
      
      valueAxis2.renderer.gridContainer.background.fill = am4core.color("#000000");
      valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;
      
      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataSource.url = "assets/data/reliance/chartdata.csv";
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
      series50.dataSource.url = "assets/data/reliance/50-dma.csv";
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
      series200.dataSource.url = "assets/data/reliance/200-dma.csv";
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
      
      let legendContainer = am4core.create("legenddiv", am4core.Container);
      chart.legend = new am4charts.Legend();
      chart.legend.parent = legendContainer;
      chart.legend.fontSize = "0.8em";
      legendContainer.width = am4core.percent(100);
      chart.legend.useDefaultMarker = true;
      const marker = chart.legend.markers.template.children.getIndex(0);
      //marker.cornerRadius(12, 12, 12, 12);
      marker.width = 10;
      marker.height = 10;

      /**
       * Setting up external controls
       */
      
      // Date format to be used in input fields
      let inputFieldFormat = "yyyy-MM-dd";
      document.getElementById("duration-select").addEventListener("ionChange", function($event) {
        this.duration = (<HTMLIonSelectElement>document.getElementById("duration-select")).value;
        
        if ((<HTMLIonSelectElement>event.target).value === '1m') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.add(date, "month", -1);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === '3m') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.add(date, "month", -3);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === '6m') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.add(date, "month", -6);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === '1y') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.add(date, "year", -1);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === '3y') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.add(date, "year", -3);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === 'YTD') {
          let max = dateAxis.groupMax["day1"];
          let date = new Date(max);
          am4core.time.round(date, "year", 1);
          zoomToDates(date);
        }
        if ((<HTMLIonSelectElement>event.target).value === 'MAX') {
          let min = dateAxis.groupMin["day1"];
          let date = new Date(min);
          zoomToDates(date);
        }
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

  ionViewWillUnload(){
    this.screenOrientation.unlock();
  }

}
