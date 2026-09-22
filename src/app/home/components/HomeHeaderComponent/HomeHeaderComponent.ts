import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-header-component',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './HomeHeaderComponent.html',
})
export class HomeHeaderComponent { }
