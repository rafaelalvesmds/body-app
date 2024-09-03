import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { TeacherViewComponent } from './features/teacher-view/teacher-view.component';
import { AuthGuard } from './core/api/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'teacher-view', component: TeacherViewComponent, canActivate: [AuthGuard] },
];
