import { Component, inject, signal } from '@angular/core';
import { Button, PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';
import { SearchComponent } from '../../../shared/components/SearchComponent/SearchComponent';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Course } from '../../models/Course';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from '../../services/CourseService.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-courses-page',
  imports: [MatProgressBar, PageHeaderComponent, SearchComponent, MatTableModule, MatButtonModule, MatIconModule, MatPaginator],
  templateUrl: './CoursesPage.html',
})
export class CoursesPage {


  snackbar = inject(MatSnackBar);
  service = inject(CourseService);
  router = inject(Router);
  courses = signal<Course[]>([]);
  loading = signal(false);


  displayedColumns: string[] = ['name', 'institution', 'acciones']

  openDialog(arg0: any) {
    throw new Error('Method not implemented.');
  }
  viewCourse(arg0: any) {
    throw new Error('Method not implemented.');
  }


  ngOnInit() {

    this.loading.set(true)

    this.service.findAll().subscribe({
      next: (response) => {

        console.log(response.content);
        this.courses.set(response.content);
        this.loading.set(false);
      },
      error: (x) => {
        console.log(x)
        this.loading.set(true);
      }
    })

  }

  onSearch($event: string) {
    throw new Error('Method not implemented.');
  }

  buttons: Button[] = [
    {
      title: 'Crear Curso',
      route: '/course/create',
      icon: 'class'
    }
  ]


}
