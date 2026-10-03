import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../shared/components/FooterComponent/FooterComponent';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatCard, MatCardContent],
  templateUrl: './DashboardLayout.html',
})
export class DashboardLayout {}
