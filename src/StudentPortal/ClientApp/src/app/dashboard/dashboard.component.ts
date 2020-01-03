import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog, MatDialogConfig, MatSnackBar, MatTableDataSource, MatSort } from '@angular/material';

import { StudentService } from '../services/student.service';
import { Student } from '../models/student-model';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.studentService.listen().subscribe((m: any) => {
      this.loadStudents();
    });
  }

  students : MatTableDataSource<any>;
  displayedColumns: string[] = ['RegNumber', 'FirstName', 'MiddleName', 'LastName', 'Gender', 'DateOfBirth', 'Options']

  @ViewChild(MatSort, null) sort: MatSort;

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {

    this.studentService.getStudents().subscribe(returnedData => {
      this.students = new MatTableDataSource(returnedData);
      this.students.sort = this.sort;
    });
  }

  OpenAddStudentDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddStudentComponent, dialogConfig)
  }

  openEditStudentDialog(student: Student) {
    this.studentService.formData = student;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(EditStudentComponent, dialogConfig)
  }

  deleteStudent(id: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(response => {
        this.loadStudents();
        this.snackBar.open('Student deleted successfully.', '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      });
    }
  }

  applyFilter(filterValue: string) {
    this.students.filter = filterValue.trim().toLocaleLowerCase();
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
