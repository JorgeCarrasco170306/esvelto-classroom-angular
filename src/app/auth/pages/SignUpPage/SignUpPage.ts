import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Función validadora para comparar contraseñas
const passwordsMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ ...confirmPassword.errors, passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    if (confirmPassword && confirmPassword.hasError('passwordMismatch')) {
      delete confirmPassword.errors!['passwordMismatch'];
      if (!Object.keys(confirmPassword.errors || {}).length) {
        confirmPassword.setErrors(null);
      }
    }
    return null;
  }
};

@Component({
  selector: 'app-sign-up-page',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './SignUpPage.html',
})
export class SignUpPage {

  private fb = inject(FormBuilder);

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    lastname: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: passwordsMatchValidator });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value);
  }

}