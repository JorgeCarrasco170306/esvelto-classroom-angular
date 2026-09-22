import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor } from '@angular/material/button';

@Component({
  selector: 'app-auth-header-component',
  imports: [MatToolbar, MatIconModule, MatAnchor],
  templateUrl: './AuthHeaderComponent.html',
})
export class AuthHeaderComponent {}
