import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  buttonStyle = ButtonStyleEnum.SECONDARY;

  namePattern = "[a-zA-Z\\s]+";
  phonePattern = "[- +()0-9]+";
  websiteUrlPattern = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";


  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log('this');
  }
}
