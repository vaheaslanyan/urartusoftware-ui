import { Component } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  buttonStyle: ButtonStyleEnum = ButtonStyleEnum.SECONDARY;
  buttonName = "Let's Go!"
}
