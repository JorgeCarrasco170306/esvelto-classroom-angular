import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderHomeComponent } from '../../components/HeaderHomeComponent/HeaderHomeComponent';

@Component({
  selector: 'home-layout',
  imports: [RouterOutlet, HeaderHomeComponent],
  templateUrl: './HomeLayout.html',
})
export class HomeLayout {}
