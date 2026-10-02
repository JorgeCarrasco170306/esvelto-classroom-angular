import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/AuthService';
import { RegisterRequest } from '../../../models/RegisterRequest.dto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'RegisterForm',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './RegisterForm.html',
})
export class RegisterForm {
  private _formBuilder = inject(FormBuilder);
  private service = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  registerForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { name, lastname, email, password, confirmPassword } = this.registerForm.value;

    // Validación de contraseñas iguales
    if (password !== confirmPassword) {
      this.registerForm.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      this.errorMessage.set('Las contraseñas no coinciden.');
      return;
    }

    const request: RegisterRequest = {
      name: name!,
      lastname: lastname!,
      email: email!,
      password: password!,
    };

    this.service.register(request).subscribe({
      next: (response) => {
        this.router.navigate(['/auth/validate-email'], {
          state: {
            email: request.email
          }
        })
      },
      error: (error) => {
        if (error.status === 409) {
          console.log(error);
          this.registerForm.get('email')?.setErrors({ emailConflict: true });
          this.errorMessage.set('El correo electrónico no es válido o ya existe.');
        } else {
          this.errorMessage.set('Ocurrió un error al registrar la cuenta. Inténtalo nuevamente.');
        }
      },
    });
  }
}

