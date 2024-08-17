// src/app/add-student/add-student.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  student = {
    name: '',
    email: '',
    course: '',
    age: 0
  };

  constructor(private studentService: StudentService, private router: Router) { }

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
