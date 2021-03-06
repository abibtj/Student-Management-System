import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student-model';
import { Class } from '../../models/class-model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html'
})
export class EditStudentComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<EditStudentComponent>,
    private studentService: StudentService,
    private snackBar: MatSnackBar) {
  }

  public classes: Class[];

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.studentService.getClasses().subscribe(returnedData => {
      this.classes = returnedData;
    });
  }

  editStudent(form: NgForm) {
    this.studentService.editStudent(form.value).subscribe(response => {
      this.snackBar.open('Student\'s information updated.', '', {
        duration: 5000,
        verticalPosition: 'top'
      });

      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialogBox.close();
    this.studentService.filter('Register click'); // To refresh students grid automatically
  }
}
