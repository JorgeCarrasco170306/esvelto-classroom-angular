import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-footer-component',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule
  ],
  templateUrl: './FooterComponent.html',
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {}

  currentYear: number = new Date().getFullYear();
}
