import { Component, inject, signal } from '@angular/core';
import { AuthStateService } from '../../../../auth/services/AuthState.service';
import { UserResponse } from '../../../../auth/models/UserResponse.dto';
import { MatDivider } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [MatDivider, MatChipsModule, LowerCasePipe],
  templateUrl: './ProfilePage.html',
})
export class ProfilePage {

  private stateService = inject(AuthStateService);
  user = signal<UserResponse | null>(null);

  ngOnInit() {
    this.user.set(this.stateService.user())
    console.log(this.user())
  }

}
