import { Component, inject, signal } from '@angular/core';
import { TeacherService } from '../../core/services/teacher.service';
import { TeacherModel } from '../../core/models/teacher.model'; // Importe o modelo TeacherModel
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherListComponent } from "./teacher-list/teacher-list.component";


@Component({
  selector: 'app-adm-view',
  standalone: true,
  imports: [ButtonModule, HttpClientModule, FormsModule, ReactiveFormsModule, TeacherListComponent],
  templateUrl: './adm-view.component.html',
  styleUrls: ['./adm-view.component.sass']
})
export class AdmViewComponent {
  teacherService = inject(TeacherService);
  fb = inject(FormBuilder);

  teacherForm = signal<FormGroup>(new FormGroup({}));

  teachers: TeacherModel[] = [];

  ngOnInit() {
    this.teacherForm.set(this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      avatar: ['', []],
      registerDate: [new Date(), []]
    }));
  }

  loadTeachers() {
    this.teacherService.getTeachers().subscribe(
      (teachers: TeacherModel[]) => {
        this.teachers = teachers;
      },
      (error) => {
        console.error('Failed to load teachers', error);
      }
    );
  }

  registerTeacher(teacher: TeacherModel) {
    if (this.teacherForm().valid) {
      this.teachers
      // this.teacherService.registerTeacher(teacher).subscribe(
      //   (newTeacher: TeacherModel) => {
      //     this.teachers.push(newTeacher);
      //     this.loadTeachers();
      //   },
      //   (error) => {
      //     console.error('Failed to register teacher', error);
      //   }
      // );
    }
  }

  editTeacher(id: number, teacher: TeacherModel) {
    this.teacherService.editTeacher(id, teacher).subscribe(
      (updatedTeacher: TeacherModel) => {
        const index = this.teachers.findIndex(t => t.id === id);
        if (index !== -1) {
          this.teachers[index] = updatedTeacher;
        }
      },
      (error) => {
        console.error('Failed to update teacher', error);
      }
    );
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(
      () => {
        this.teachers = this.teachers.filter(t => t.id !== id);
      },
      (error) => {
        console.error('Failed to delete teacher', error);
      }
    );
  }

}
