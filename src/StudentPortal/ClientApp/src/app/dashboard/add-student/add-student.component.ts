import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<AddStudentComponent>,
    private studentService: StudentService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm();
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
      DateOfBirth: Date.now.toString()
      //DateOfBirth: Date.parse('01/01/2000')
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
