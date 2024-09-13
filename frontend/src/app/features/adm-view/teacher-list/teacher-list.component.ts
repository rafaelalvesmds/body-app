import { Component, signal } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { TeacherModel } from '../../../core/models/teacher.model';
import { Action } from '../../../core/models/action.model';

@Component({
  selector: 'teacher-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.sass'
})
export class TeacherListComponent {

  columns = [
    { field: 'avatar', header: '', type: 'image' },
    { field: 'name', header: 'Name', width: '30%' },
    { field: 'email', header: 'Email', width: '30%' },
    { field: 'status', header: 'Status', width: '20%', type: 'tag' },
    { field: 'registerDate', header: 'Register Date', width: '20%', type: 'date' },
  ];

  actions: Action[] = [
    { icon: 'pi pi-pencil', method: (data: any) => console.log('edit', data), severity: 'info' },
    { icon: 'pi pi-trash', method: (data: any) => console.log('delete', data), severity: 'danger' },
  ];

  teachers = signal<TeacherModel[]>([
    { name: 'Teacher 1', email: 'teacher1sobrenome@email.com.br', registerDate: new Date(), avatar: '', status: true },
    { name: 'Teacher 1', email: 'teacher2sobrenome@email.com.br', registerDate: new Date(), avatar: '', status: true },
    { name: 'Teacher 1', email: 'teacher3sobrenome@email.com.br', registerDate: new Date(), avatar: '', status: false },
    { name: 'Teacher 1', email: 'teacher4sobrenome@email.com.br', registerDate: new Date(), avatar: '', status: false },
    { name: 'Teacher 1', email: 'teacher5sobrenome@email.com.br', registerDate: new Date(), avatar: '', status: true },
  ]);

}
