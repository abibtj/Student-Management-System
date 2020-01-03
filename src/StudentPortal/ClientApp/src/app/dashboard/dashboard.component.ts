import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material';
import { StudentService } from '../services/student.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService,
    private dialog: MatDialog) { }

  students : MatTableDataSource<any>;
  displayedColumns: string[] = ['RegNumber', 'FirstName', 'MiddleName', 'LastName', 'Gender', 'DateOfBirth', 'Options']
  //displayedColumns: string[] = ['RegNumber', 'FirstName', 'Options']

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {

    this.studentService.getStudents().subscribe(returnedData => {
      this.students = new MatTableDataSource(returnedData);
    });
  }

  OpenAddStudentDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddStudentComponent, dialogConfig)
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
