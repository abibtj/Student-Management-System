import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public students: Student[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<Student[]>(baseUrl + 'api/students').subscribe(result => {
    http.get<Student[]>('https://localhost:5001/api/students').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }
}

interface Student {
  regNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
}
