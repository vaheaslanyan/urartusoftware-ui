import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertLevelEnum } from 'src/app/models/AlertLevelEnum';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';
import { AlertService } from 'src/app/services/alert.service';
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

  isLoading = false;

  constructor(private crService: ContactRequestService, private alertService: AlertService, private router: Router) {}

  ngOnInit(): void {}

  submitForm(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.valid) {
      this.saveRequest(form);
    } else {
      this.alertService.setAlert("Please check your infomation", AlertLevelEnum.WARNING);
    }
  }

  saveRequest(form: NgForm) {

    this.isLoading = true;

    this.crService.postRequest(JSON.stringify(form.value)).subscribe({
      next: (res) => {
        this.router.navigate(['confirmation']);
        this.alertService.setAlert("Request submitted.", AlertLevelEnum.SUCCESS);
      },
      error: (err) => {
        console.log('failed', err);
        this.alertService.setAlert("Request failed", AlertLevelEnum.DANGER);
      }
    }).add(() => {
      // Runs in either case after above is done
      this.isLoading = false;
    });
  }
}