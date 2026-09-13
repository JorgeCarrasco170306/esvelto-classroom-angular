import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './shared/layouts/MainLayout/MainLayout';

@Component({
  imports: [RouterOutlet, MainLayout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('esvelto-classroom');
}
