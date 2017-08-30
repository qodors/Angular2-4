import { Component, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from '../_services/index';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dash: any = [];
  books = [];
  constructor(
    private userService: UserService
  ) {
    this.userService.dashboard().subscribe(data => {
      if(data.error_code == 0){
        this.dash = data.data;
        this.intChart();
      }
    });
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    onlyInteger: true,
    low:0,
    high:5,
    beginAtZero:true
  };
  public barChartLabels:string[] = ["Book1","Book2","Book3","Book4","Book5"];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
      {data: [1,2,3,4,5], label: 'Books'}
  ];

  intChart(){
    this.barChartLabels = this.dash.books;
    this.barChartData = [
      {data: this.dash.rates, label: 'Books'}
    ];
  }
 
  ngOnInit(){}

}
