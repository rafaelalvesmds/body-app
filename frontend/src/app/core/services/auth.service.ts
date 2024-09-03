import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:3000';
    private jwtHelper = new JwtHelperService();
    private tokenSubject = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient) { }

    register(email: string, password: string) {
        return this.http.post(`${this.apiUrl}/register`, { email, password });
    }

    login(email: string, password: string) {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
            .pipe(tap(response => this.tokenSubject.next(response.token)));
    }

    get token() {
        return this.tokenSubject.asObservable();
    }

    get isLoggedIn() {
        const token = this.tokenSubject.getValue();
        return token && !this.jwtHelper.isTokenExpired(token);
    }
}
