import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students : MatTableDataSource<any>;
  //displayedColumns: string[] = ['RegNumber', 'FirstName', 'MiddleName', 'LastName', 'Gender', 'DateOfBirth', 'Options']
  displayedColumns: string[] = ['RegNumber', 'FirstName', 'Options']

  ngOnInit() {
    this.refreshStudentTable();
  }

  refreshStudentTable() {

    //this.studentService.getStudents().subscribe(returnedData => {
    //  this.students = new MatTableDataSource(returnedData);
    //});

    var dummyData = [
      {
        RegNumber: "123",
        FirstName: "Abeeb",
        MiddleName: "Olatunji",
        LastName: "Liadi",
        Gender: "Male",
        DateOfBirth: "23/3/1999"
      },
      {
        RegNumber: "456",
        FirstName: "Almas",
        MiddleName: "Olayemi",
        LastName: "Olatunji",
        Gender: "Female",
        DateOfBirth: "23/3/2021"
      }
    ]

    this.students = new MatTableDataSource(dummyData);
  }

}



//import { Component, Inject } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

//@Component({
//  selector: 'app-dashboard',
//  templateUrl: './dashboard.component.html'
//})
//export class DashboardComponent {
//  public students: Student[];

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<Student[]>(baseUrl + 'api/students').subscribe(result => {
//      this.students = result;
//    }, error => console.error(error));
//  }
//}

//interface Student {
//  id: string;
//  regNumber: string;
//  firstName: string;
//  middleName: string;
//  lastName: string;
//  gender: string;
//  dateOfBirth: string;
//}
