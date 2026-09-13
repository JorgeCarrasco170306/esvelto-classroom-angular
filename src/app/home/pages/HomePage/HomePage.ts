import { Component, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './HomePage.html',
})
export class HomePage implements OnInit {
  ngOnInit(): void {}
}
