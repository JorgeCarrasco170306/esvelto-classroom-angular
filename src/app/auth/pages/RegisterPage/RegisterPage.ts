import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { RegisterForm } from '../../components/register/RegisterForm/RegisterForm';
import { MatIconModule } from '@angular/material/icon';
import { AuthCardComponent } from '../../components/shared/AuthCardComponent/AuthCardComponent';

@Component({
  selector: 'app-register-page',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RegisterForm,
    MatIconModule,
    AuthCardComponent
], templateUrl: './RegisterPage.html',
})
export class RegisterPage {

}
