import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/CourseService.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-page',
  imports: [],
  templateUrl: './CoursePage.html',
})
export class CoursePage {

  private router = inject(Router);
  private id = signal('');
  private route = inject(ActivatedRoute);
  private service = inject(CourseService);
  private snackbar = inject(MatSnackBar);

  ngOnInit() {
    
  }

}
