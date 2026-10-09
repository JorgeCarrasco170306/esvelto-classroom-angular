import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/CourseService.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageHeaderComponent } from '../../../shared/components/PageHeaderComponent/PageHeaderComponent';
import { Course } from '../../models/Course';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { Student } from '../../../institutions/models/Institution.dto';

@Component({
  selector: 'app-course-page',
  imports: [MatTableModule,MatTabsModule,PageHeaderComponent, MatButtonModule, MatIcon, MatCardModule, MatCardContent],
  templateUrl: './CoursePage.html',
})
export class CoursePage {

  private router = inject(Router);
  private id = signal<string | null>(null);
  private route = inject(ActivatedRoute);
  private service = inject(CourseService);
  private snackbar = inject(MatSnackBar);

  course = signal<Course | null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const courseId = params.get('id');
      this.id.set(courseId);

      if (courseId) {
        this.service.findById(this.id()!).subscribe({
          next: (response) => {
            this.course.set(response);
            this.dataSource.set(response.students ?? []);
          }
        })
      }
    })
  }

  displayedColumns: string[] = ['no', 'name', 'email', 'actions'];
  dataSource = signal<Student[]>([]);

}
