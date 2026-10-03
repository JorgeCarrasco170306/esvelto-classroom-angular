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
    request.teacherId = this.user.user()?.id!
    console.log(request)

    this.service.add(request).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/institutions']);
      },
      error: () => {
        this.submitError.set('No se pudo crear la institución. Intenta nuevamente.');
      },
    })
  }
}
