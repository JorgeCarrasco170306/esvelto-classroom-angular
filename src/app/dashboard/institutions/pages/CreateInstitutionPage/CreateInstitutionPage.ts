import { Component, inject, signal } from '@angular/core';
import { Button, PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAnchor } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InstitutionService } from '../../services/InstitutionService.service';
import { Router } from '@angular/router';
import { InstitutionRequest } from '../../models/Institution.dto';
import { AuthStateService } from '../../../../auth/services/AuthState.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-institution-page',
  imports: [ReactiveFormsModule, PageHeaderComponent, MatFormFieldModule, MatInputModule, MatAnchor, MatIconModule],
  templateUrl: './CreateInstitutionPage.html',
})
export class CreateInstitutionPage {
  buttons: Button[] = [
    { title: 'Volver', route: '/dashboard/institutions', icon: 'arrow_back' }
  ]

  private service = inject(InstitutionService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private user = inject(AuthStateService);
  private snackbar = inject(MatSnackBar)

  submitError = signal('');

  form = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required]
  })

  submit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitError.set('');
    const request = this.form.value as InstitutionRequest;
    request.userId = this.user.user()?.id!
    console.log(request)

    this.service.add(request).subscribe({
      next: () => {
        this.snackbar.open('Institución Creada Exitosamente', 'Cerrar', { duration: 3000 })
        this.router.navigate(['/dashboard/institutions']);
      },
      error: (error) => {

        if (error.status === 400) {
          this.form.get('name')?.setErrors({
            existe: true
          })
        }

        console.log(error)
      },
    })
  }
}
