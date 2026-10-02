import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleHeaderComponent } from '../../../shared/components/TitleHeaderComponent/TitleHeaderComponent';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, TitleHeaderComponent],
  templateUrl: './AuthLayout.html',
})
export class AuthLayout { }
