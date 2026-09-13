import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header-component',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDividerModule
  ],
  templateUrl: './HeaderComponent.html',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void { }

  unreadNotifications = 3;

  onLogout(): void {
    console.log('Cerrando sesión...');
  }
}
