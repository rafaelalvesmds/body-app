import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherModel } from '../models/teacher.model';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    private apiUrl = 'http://localhost:3000/teacher';

    constructor(private http: HttpClient) { }

    registerTeacher(teacher: TeacherModel): Observable<any> {
        return this.http.post(this.apiUrl, teacher);
    }

    editTeacher(id: number, teacher: TeacherModel): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}`, teacher);
    }

    deleteTeacher(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    getTeacher(id: number): Observable<TeacherModel> {
        return this.http.get<TeacherModel>(`${this.apiUrl}/${id}`);
    }

    getTeachers(): Observable<TeacherModel[]> {
        return this.http.get<TeacherModel[]>(this.apiUrl);
    }
}
