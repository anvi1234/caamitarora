import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string = '';
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === 'Amit@2025#Orra_Cl@ss!98') {
      this.isSuccess = true;
      this.message = '✅ Login successful!';
      // Redirect after 1 second
      setTimeout(() => {
        this.router.navigate(['/b8e2f6eb5b54b1ef1e5e8f302ff628f6ba674fbec6ff1571318dd43259a2df6f']); // change to your route
      }, 1000);
    } else {
      this.isSuccess = false;
      this.message = '❌ Invalid username or password';
    }
  }
}
