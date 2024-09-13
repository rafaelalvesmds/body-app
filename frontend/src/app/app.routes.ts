import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { TeacherViewComponent } from './features/teacher-view/teacher-view.component';
import { AuthGuard } from './core/api/auth.guard';
import { AdmViewComponent } from './features/adm-view/adm-view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'teacher-view', component: TeacherViewComponent, canActivate: [AuthGuard] },
    { path: 'adm-view', component: AdmViewComponent },

];
