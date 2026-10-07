import { Component, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Componentes y Servicios propios
import { PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';
import { CourseService } from '../../services/CourseService.service';
import { InstitutionService } from '../../../institutions/services/InstitutionService.service';
import { Institution } from '../../../institutions/models/Institution.dto';
import { C, G } from '@angular/cdk/keycodes';
import { CourseRequest } from '../../models/Course';
import cgg from '@angular/common/locales/cgg';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PageHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './CreateCourse.html',
})
export class CreateCourse implements OnInit {
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  private service = inject(CourseService);
  private institutionService = inject(InstitutionService);
  private router = inject(Router);

  institutions = signal<Institution[]>([]);

  courseForm = this.fb.group({
    name: ['', Validators.required],
    institutionId: ['', Validators.required],
  });

  ngOnInit(): void {


    this.institutionService.findAll(0, 10).subscribe({
      next: (response) => {
        this.institutions.set(response.content);
      },
      error: (err) => {
        console.error('Error fetching institutions:', err);
      },
    });
  }


  create() {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const request = this.courseForm.value as CourseRequest;
    console.log({ request })

    this.service.create(request).subscribe({
      next: (response) => {
        this.snackbar.open('Curso creado correctamente', 'Cerrar', { duration: 3000 })
        this.router.navigate(['/dashboard/courses'])
        console.log(response)
      },
      error: (err) => {
        console.error(err);
      },
    })
  }
}