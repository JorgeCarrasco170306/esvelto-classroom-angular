import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { HomeHeaderComponent } from '../../components/HomeHeaderComponent/HomeHeaderComponent';

@Component({
  selector: 'app-home-layout-component',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, HomeHeaderComponent],
  templateUrl: './HomeLayoutComponent.html',
})
export class HomeLayoutComponent { }
