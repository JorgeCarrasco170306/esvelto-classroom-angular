import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './MainLayout.html',
})
export class MainLayout implements OnInit {
  ngOnInit(): void {}
}
