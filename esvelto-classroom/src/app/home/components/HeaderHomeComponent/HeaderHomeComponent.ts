import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-home-component',
  imports: [MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './HeaderHomeComponent.html',
})
export class HeaderHomeComponent {}
