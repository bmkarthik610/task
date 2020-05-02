import { Component, OnInit } from '@angular/core';
import {
  ChartReadyEvent,
  ChartErrorEvent,
  ChartSelectEvent,
  ChartMouseOverEvent,
  ChartMouseOutEvent,
  RegionClickEvent,
  GoogleChartInterface,
  GoogleChartsControlInterface,
  GoogleChartsDashboardInterface,
} from 'ng2-google-charts';

declare var $: any;
declare var google: any;
// import { shakespeareData } from './shakespeare';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectEvent: ChartSelectEvent;
  public regionClickEvent: RegionClickEvent;
  public imageURI = '';
  columnChartData:any[];



 






  public columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: this.columnChartData,
    options: {
      title: 'Hyderabad Karona Cases Datewise',
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };








  showChart: boolean;


  constructor(private http: HttpClient, private homeService : HomeService) { }

  httpData:any;
  ChartData()
  {

  this.homeService.getChartData().subscribe(data => {
       
        this.columnChart.dataTable = data;
        this.columnChart.component.draw();
        
    },
    err => {
      console.log('err');
    })

  }
  ngOnInit() {
    this.ChartData();
 }




  public changeChartType() {
    if (this.columnChart.chartType === 'ColumnChart') {
      this.columnChart.chartType = 'PieChart';
    } else {
      this.columnChart.chartType = 'ColumnChart';
    }
    this.columnChart.component.draw();
  }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error('Error: ' + event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }











}
