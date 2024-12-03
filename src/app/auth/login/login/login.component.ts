import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login';
  email = '';
  password = '';

  constructor(private router:Router){}

  login() {
    if (this.email === 'humayunahmedniloy1@gmail.com' && this.password === 'admin') {
      console.log(this.email, this.password);
      alert('Login successful');
      this.router.navigate(['/newsfeed']);

    } else {
      console.log(this.email, this.password);
      alert('Login failed');
    }
  }
}
