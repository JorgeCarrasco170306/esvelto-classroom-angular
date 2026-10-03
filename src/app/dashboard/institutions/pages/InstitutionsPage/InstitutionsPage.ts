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

@Component({
  selector: 'app-institutions-page',
  imports: [MatButtonModule, MatInputModule, MatTableModule, PageHeaderComponent, SearchComponent, MatPaginator, MatIconModule],
  templateUrl: './InstitutionsPage.html',
})
export class InstitutionsPage {

  displayedColumns: string[] = ['name', 'image', 'teacher', 'students', 'acciones'];

  service = inject(InstitutionService);

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
}
