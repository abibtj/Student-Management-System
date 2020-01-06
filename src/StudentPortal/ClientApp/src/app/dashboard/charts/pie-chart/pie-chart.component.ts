import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  constructor(private studentService: StudentService) {
  }

  pieChartData: number[] = [];
  //pieChartData: number[] = [23, 19];
  pieChartLabels: string[] = ['Male', 'Female'];
  colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b']
    }
  ];

  pieChartType = 'pie';

  ngOnInit() {
    this.getStudentsGender();
  }

  getStudentsGender() {

    this.studentService.getStudentsGender().subscribe(returnedData => {
      this.pieChartData = returnedData;
    });
  }

  
}

