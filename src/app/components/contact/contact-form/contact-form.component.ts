import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  buttonStyle = ButtonStyleEnum.SECONDARY;

  namePattern = "[a-zA-Z\\s]+";
  phonePattern = "[- +()0-9]+";
  websiteUrlPattern = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
  businessSources = ['Seach Engine (Google, etc.)', 'Social Media (LinkedIn, Twitter, etc.)', 'Referral', 'Other'];

  constructor() {}

  ngOnInit(): void {}

  submitForm(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.valid) {
      console.log(form.value);
    }
    
  }
}
