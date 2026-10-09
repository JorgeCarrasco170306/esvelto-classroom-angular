import { Component, inject, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Button, PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';
import { SearchComponent } from '../../../shared/components/SearchComponent/SearchComponent';
import { Institution } from '../../models/Institution.dto';
import { InstitutionService } from '../../services/InstitutionService.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../shared/components/DialogComponent/DialogComponent';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-institutions-page',
  imports: [MatButtonModule, MatInputModule, MatTableModule, PageHeaderComponent, SearchComponent, MatPaginator, MatIconModule],
  templateUrl: './InstitutionsPage.html',
})
export class InstitutionsPage {

  displayedColumns: string[] = ['name', 'image', 'teacher', 'students', 'acciones'];

  service = inject(InstitutionService);
  private dialog = inject(MatDialog)
  private router = inject(Router);
  private snackbar = inject(MatSnackBar);

  buttons: Button[] = [
    {
      title: 'Crear Institución',
      icon: 'add',
      route: '/dashboard/institutions/create',
    },
  ]

  institutions = signal<Institution[]>([]);
  query = signal('');

  currentPage = signal(0);
  pageSize = signal(10);
  totalElements = signal(0);


  ngOnInit() {
    this.loadInstitutions();
  }

  loadInstitutions() {
    this.service.findAll(this.currentPage(), this.pageSize(), this.query()).subscribe({
      next: (response) => {
        console.log(response);
        this.institutions.set(response.content ?? []);
        this.currentPage.set(response.number);
        this.pageSize.set(response.size);
        this.totalElements.set(response.totalElements)
      }
    })
  }

  onSearch(query: string) {
    this.query.set(query);
    this.currentPage.set(0);
    this.loadInstitutions();
  }

  onPageChange(event: PageEvent) {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadInstitutions();
  }



  // ? dialogo 

  openDialog(id: string) {


    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Eliminar Institución?',
        message: "Esta acción no es reversible y eliminará todos los registros relacionados como las tareas y los cursos dentro de esta institución."
      }
    });

    dialogRef.afterClosed().subscribe(x => {
      if (x) {
        this.service.delete(id).subscribe({
          next: (res) => {
            this.snackbar.open('Insitución eliminada', 'Cerrar', { duration: 3000 })
          },
          error: (x) => console.log(x)
        })
        this.loadInstitutions();
      } else {
        return;
      }
    })
  }

  viewInstitution(id: string) {
    console.log(id);
    this.router.navigate(['dashboard/institutions', id]);
  }

  copyLink(id: string) {
    this.snackbar.open('Has copiado el URL de esta institución', 'Cerrar', { duration: 3000 })
  }
}
