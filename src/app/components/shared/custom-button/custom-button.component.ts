import { Component, Input, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

/**
 * Provides functionality and styling for a button
 */
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() name?: String;
  @Input() style?: ButtonStyleEnum; // Pass ButtonStyle.PRIMARY, .SECONDARY, or .TERTIARY
  @Input() isDisabled: boolean = false;
  @Input() useParentWidth: boolean = false; // width is set automatically if false

  buttonStyle = ButtonStyleEnum;

  constructor() {}

  ngOnInit(): void {}
}
