import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';
import { ContactRequest } from 'src/app/models/ContactRequest';
import { ContactRequestService } from 'src/app/services/contact-request.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  buttonStyle = ButtonStyleEnum.SECONDARY;

  namePattern = '[a-zA-Z\\s]+';
  phonePattern = '[- +()0-9]+';
  websiteUrlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  businessSources = [
    'Seach Engine (Google, etc.)',
    'Social Media (LinkedIn, Twitter, etc.)',
    'Referral',
    'Other',
  ];

  constructor(private crService: ContactRequestService) {}

  ngOnInit(): void {}

  submitForm(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.valid) {
      console.log(JSON.stringify(form.value))
      this.saveRequest(form);
    }
  }

  saveRequest(form: NgForm) {

    this.crService.postRequest(JSON.stringify(form.value)).subscribe({
      next(res) {
        console.log('saved', res);
      },
      error(err) {
        console.log('failed', err);
      },
    });
  }
}
