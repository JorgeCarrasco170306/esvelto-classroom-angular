import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'HeaderComponent',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './HeaderComponent.html',
})
export class HeaderComponent {}
