import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student-model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

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

  deleteStudent(id: string) {
    return this.http.delete(this.APIUrl + '/' + id );
  }

  editStudent(student: Student) {
    return this.http.put(this.APIUrl + '/' + student.Id, student);
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
