import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'TitleHeaderComponent',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './TitleHeaderComponent.html',
})
export class TitleHeaderComponent {

  title = input.required<string>();

}
