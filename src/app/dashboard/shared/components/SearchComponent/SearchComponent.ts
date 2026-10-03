import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'SearchComponent',
  imports: [MatIconModule, MatInputModule],
  templateUrl: './SearchComponent.html',
})
export class SearchComponent {

  placeholder = input.required<string>();
  label = input.required<string>();

}
