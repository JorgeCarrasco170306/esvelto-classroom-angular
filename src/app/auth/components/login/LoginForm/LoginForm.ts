import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthStateService } from '../../../services/AuthState.service';
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
  private authState = inject(AuthStateService);
  private router = inject(Router);

  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);
  isSubmitting = signal(false);

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {

    if (this.loginForm.invalid || this.isSubmitting()) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage.set(null);
    this.isSubmitting.set(true);
    const request: LoginRequest = this.loginForm.value as LoginRequest;

    this.authState.login(request).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard').catch(error => {
          this.isSubmitting.set(false);
          this.errorMessage.set('No se pudo abrir el panel. Inténtalo de nuevo.');
          console.error('Error al navegar al dashboard', error);
        });
      },
      error: (error) => {
        this.isSubmitting.set(false);
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
        this.errorMessage.set(
          error.status === 409
            ? 'Debes verificar tu correo antes de iniciar sesión.'
            : 'El correo o la contraseña no son correctos.'
        );
        console.error('Error al iniciar sesión', error);
      },
    });
  }
}
