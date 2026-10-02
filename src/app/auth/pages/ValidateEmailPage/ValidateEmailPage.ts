import { Component } from '@angular/core';
import { ValidateEmailFormComponent } from '../../components/validate-email/ValidateEmailFormComponent/ValidateEmailFormComponent';
import { AuthCardComponent } from '../../components/shared/AuthCardComponent/AuthCardComponent';

@Component({
  selector: 'app-validate-email-page',
  imports: [ValidateEmailFormComponent, AuthCardComponent],
  templateUrl: './ValidateEmailPage.html',
})
export class ValidateEmailPage {}
