import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../services/AuthService';
import { LoginRequest } from '../../../models/LoginRequest.dto';

@Component({
  selector: 'LoginFormComponent',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './LoginForm.html',
})
export class LoginForm {
  private _formBuilder = inject(FormBuilder);
  private service = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const request: LoginRequest = this.loginForm.value as LoginRequest;

    this.service.login(request)?.subscribe({
      next: (response) => {

        this.router.navigate(['/dashboard'])
        console.log(response.token);
      },
      error: (error) => {
        if (error.status === 409) {
          this.loginForm.controls.email.setErrors({
            ...this.loginForm.controls.email.errors,
            notVerified: true,
          });
        }
        else if (error.status === 404 || error.status === 403) {
          this.loginForm.controls.email.setErrors({
            ...this.loginForm.controls.email.errors,
            badCredentials: true
          })
        }
        console.log(error)
      },
    });
  }
}

