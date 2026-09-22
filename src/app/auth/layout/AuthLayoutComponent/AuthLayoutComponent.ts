import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AuthHeaderComponent } from '../../components/AuthHeaderComponent/AuthHeaderComponent';

@Component({
  selector: 'app-auth-layout-component',
  imports: [RouterOutlet, MatAnchor, MatIcon, AuthHeaderComponent],
  templateUrl: './AuthLayoutComponent.html',
})
export class AuthLayoutComponent {}
