import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {

  genders: Gender[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }
  ];

  constructor(public dialogBox: MatDialogRef<AddStudentComponent>,
  private service: StudentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
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
    this.service.addStudent(form.value).subscribe(response => {
      this.resetForm(form);
      alert(response);
    });
  }

  closeDialog() {
    this.dialogBox.close();
  }
}

export interface Gender {
  value: string;
  viewValue: string;
}
