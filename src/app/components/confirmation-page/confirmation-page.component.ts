import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent {
  buttonStyle = ButtonStyleEnum;

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['']);
  }
}
