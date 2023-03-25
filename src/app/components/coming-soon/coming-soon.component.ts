import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  buttonStyle = ButtonStyleEnum.PRIMARY;

  constructor(@Inject(DOCUMENT) private document: Document){}

  redirectToURL() {
    this.document.location.href = 'https://vahe.urartusoftware.com';
  }
}
