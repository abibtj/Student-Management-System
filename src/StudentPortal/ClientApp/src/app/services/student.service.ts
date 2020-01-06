import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student-model';
import { StudentsGenderByClass } from '../models/studentsGenderByClass-model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Class } from '../models/class-model';

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

  getStudentsGender(): Observable<number[]> {
    return this.http.get<number[]>(this.APIUrl + '/GetStudentsGender');
  }

  getStudentsGenderByClass(): Observable<StudentsGenderByClass[]> {
    return this.http.get<StudentsGenderByClass[]>(this.APIUrl + '/GetStudentsGenderByClass');
  }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.APIUrl + '/GetClasses');
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
