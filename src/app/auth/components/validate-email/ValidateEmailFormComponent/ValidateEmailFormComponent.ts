import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/AuthService';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ValidateEmailRequest } from '../../../models/ValidateEmailRequest.dto';

@Component({
  selector: 'ValidateEmailFormComponent',
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, RouterLink],
  templateUrl: './ValidateEmailFormComponent.html',
})
export class ValidateEmailFormComponent {

  service = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  email = signal<string>('');
  errorMessage = signal<string | null>(null);
  resendRequested = signal(false);
  isResending = signal(false);

  constructor() {
    const navigation = this.router.currentNavigation();
    this.email.set(navigation?.extras.state?.['email'] ?? '');
  }

  validateEmailForm = this.fb.group({
    code: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/^\d{6}$/),
      ],
    ],
  });


  onSubmit() {
    this.errorMessage.set(null);

    if (!this.validateEmailForm.valid) {
      this.validateEmailForm.markAllAsTouched();
      return;
    }

    const { code } = this.validateEmailForm.value;

    const request: ValidateEmailRequest = {
      verificationCode: code!,
      email: this.email()
    }

    this.service.validateEmail(request).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/dashboard'])
      },
      error: (error) => {
        console.log(error);

        if (error.status === 401 || error.error?.message === 'User already verified') {
          this.errorMessage.set('Este correo electrónico ya está verificado.');
        } else if (error.status === 409 || error.error?.message === 'incorrect code') {
          this.errorMessage.set('El código de verificación es incorrecto.');
        } else if (error.status === 400 && error.error?.message === 'verification code expired') {
          this.errorMessage.set('El código de verificación ha expirado. Solicita uno nuevo.');
        } else {
          this.errorMessage.set(
            'No se pudo verificar el correo electrónico. Inténtalo nuevamente.'
          );
        }
      }
    })
  }


  resendCode() {
    if (this.resendRequested() || this.isResending()) {
      return;
    }

    this.isResending.set(true);

    this.service.resendEmail({ email: this.email() }).subscribe({
      next: (response) => {
        console.log(response);
        this.resendRequested.set(true);
        this.isResending.set(false);
      },
      error: (error) => {
        console.log(error);
        this.isResending.set(false);
      }
    })
  }


}
