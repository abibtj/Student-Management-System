import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

//const BARCHART_DATA: any[] = [
//  { "data": [1, 3, 2, 4, 2, 5], "label": "Male" },
//  { "data": [1, 4, 3, 3, 0, 3], "label": "Female" }];

const BARCHART_LABELS: string[] = ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }
  
  public barChartData: any[] = [{data: []}];
  public barChartLabels: string[] = BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit() {
    this.getStudentsGenderByClass();
  }

  getStudentsGenderByClass() {

    this.studentService.getStudentsGenderByClass().subscribe(returnedData => {
      this.barChartData = returnedData;
    });
  }
}

