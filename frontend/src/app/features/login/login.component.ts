import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = signal<FormGroup>(new FormGroup({}));

  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);

  constructor() {

  }

  ngOnInit() {
    this.loginForm.set(this.fb.group({
      email: [''],
      password: ['']
    }));
  }

  login() {
    const { email, password } = this.loginForm().value;
    console.log(email, password);
    this.authService.login(email, password).subscribe((res: any) => {
      console.log(res, 'login response');
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/teacher-view']);
      }
    });
  }

  register() {
    const { email, password } = this.loginForm().value;
    this.authService.register(email, password).subscribe((res: any) => {
      console.log(res, 'register response');
    });
  }
}
