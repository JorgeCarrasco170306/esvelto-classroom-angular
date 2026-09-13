import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from '../../../home/pages/HomePage/HomePage';
import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HomePage, HeaderComponent, FooterComponent],
  templateUrl: './MainLayout.html',
})
export class MainLayout implements OnInit {
  ngOnInit(): void {}
}
