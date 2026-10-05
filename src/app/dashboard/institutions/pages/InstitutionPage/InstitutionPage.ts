import { Component, inject, signal } from '@angular/core';
import { Institution } from '../../models/Institution.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InstitutionService } from '../../services/InstitutionService.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { Button, PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';

@Component({
  selector: 'app-institution-page',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatDivider, PageHeaderComponent],
  templateUrl: './InstitutionPage.html',
})
export class InstitutionPage {

  service = inject(InstitutionService)
  institution = signal<Institution | null>(null);
  id = signal('');
  router = inject(Router);
  route = inject(ActivatedRoute);
  snackbar = inject(MatSnackBar);

  buttons: Button[] = [
    {
      title: 'Volver a instituciones',
      icon: 'arrow_back',
      route: '/dashboard/institutions',
    },
  ];


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.id.set(id);
    this.loadInstitution(this.id());
  }

  private loadInstitution(id: string) {
    this.service.findById(id).subscribe({
      next: (res) => {
        this.institution.set(res);
        console.log(res)
      },
      error: (error) => {
        console.error('No se pudo cargar la institución', error);
        this.snackbar.open(
          error.status === 500
            ? 'El servidor no pudo cargar esta institución.'
            : 'No se pudo cargar la institución.',
          'Cerrar',
          { duration: 5000 },
        );
        this.router.navigate(['/dashboard/institutions']);
      }
    });
  }


}
