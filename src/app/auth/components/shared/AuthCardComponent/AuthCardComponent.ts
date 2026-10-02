import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'AuthCardComponent',
  imports: [MatCardModule],
  templateUrl: './AuthCardComponent.html',
})
export class AuthCardComponent {

  title = input.required<string>();

}
