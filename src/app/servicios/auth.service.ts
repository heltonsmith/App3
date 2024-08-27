import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    // Aquí puedes realizar una llamada HTTP para autenticar al usuario
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.router.navigate(['/store']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
