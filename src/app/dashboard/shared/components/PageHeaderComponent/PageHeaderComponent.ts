import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export interface Button {
  title: string,
  route: string,
  icon: string
}

@Component({
  selector: 'PageHeaderComponent',
  imports: [MatButtonModule,MatIconModule, MatDivider, RouterLink],
  templateUrl: './PageHeaderComponent.html',
})
export class PageHeaderComponent {

  buttons = input<Button[]>();
  title = input.required<string>();

}
