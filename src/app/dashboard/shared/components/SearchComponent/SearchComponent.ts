import { Component, DestroyRef, inject, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'SearchComponent',
  imports: [MatIconModule, MatInputModule, FormsModule],
  templateUrl: './SearchComponent.html',
})
export class SearchComponent {

  placeholder = input.required<string>();
  label = input.required<string>();


  query = '';
  search = output<string>();

  private readonly destroyRef = inject(DestroyRef);
  private readonly searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((query) => this.search.emit(query.trim()));
  }

  onSearch() {
    this.searchSubject.next(this.query);
  }

}
