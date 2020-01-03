import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData: Student;
  readonly APIUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.APIUrl = baseUrl + 'api/students';
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.APIUrl);
  }

  addStudent(student: Student) {
    return this.http.post(this.APIUrl, student);
  }
}
