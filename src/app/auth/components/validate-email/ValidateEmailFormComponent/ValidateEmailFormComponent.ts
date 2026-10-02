import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/AuthService';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ValidateEmailRequest } from '../../../models/ValidateEmailRequest.dto';
import { ResendVerificationEmail } from '../../../models/ResendEmailVerification';

@Component({
  selector: 'ValidateEmailFormComponent',
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule],
  templateUrl: './ValidateEmailFormComponent.html',
})
export class ValidateEmailFormComponent {

  service = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  email = signal<string>('');

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

  resendVerification() {

    const request: ResendVerificationEmail = {
      email: this.email()
    }

    this.service.resendEmail(request).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err)
    })
  }

  onSubmit() {

    if (!this.validateEmailForm.valid) {
      this.validateEmailForm.markAllAsTouched();
      return;
    }

    const { code } = this.validateEmailForm.value;

    const request: ValidateEmailRequest = {
      code: code!,
      email: this.email()
    }

    this.service.validateEmail(request).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error);
      }
    })


    // unauthorized usuario verificado
    // conflict codigo incorrecto
    // bad request codigo expiro
  }

}
