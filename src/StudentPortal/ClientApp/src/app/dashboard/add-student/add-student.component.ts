import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Class } from '../../models/class-model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<AddStudentComponent>,
    private studentService: StudentService,
    private snackBar: MatSnackBar) { }

  public classes: Class[];

  ngOnInit() {
    this.resetForm();
    this.getClasses();
  }

  getClasses() {
    this.studentService.getClasses().subscribe(returnedData => {
      this.classes = returnedData;
    });
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.studentService.formData = {
      Id: '',
      RegNumber: '',
      FirstName: '',
      MiddleName: '',
      LastName: '',
      Gender: '',
      ClassId: '',
      ClassName: '',
      DateOfBirth: null
    }
  }

  addStudent(form: NgForm) {
    this.studentService.addStudent(form.value).subscribe(response => {
      this.resetForm(form);
      this.snackBar.open('Student added successfully.', '', {
        duration: 5000,
        verticalPosition: 'top'
      });
    });
  }

  closeDialog() {
    this.dialogBox.close();
    this.studentService.filter('Register click'); // To refresh students grid automatically
  }
}
