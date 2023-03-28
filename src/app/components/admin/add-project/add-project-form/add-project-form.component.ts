import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertLevelEnum } from 'src/app/models/AlertLevelEnum';
import { ButtonStyleEnum } from 'src/app/models/ButtonStyleEnum';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent implements OnInit {
  @Input() isLoading = false;

  namePattern = '[a-zA-Z0-9\\s]+';
  buttonStyle = ButtonStyleEnum.PRIMARY;

  constructor(private alertService: AlertService){}

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    form.form.markAllAsTouched();
    if (form.valid) {
      this.saveRequest(form);
    } else {
      this.alertService.setAlert("Please check your infomation", AlertLevelEnum.WARNING);
    }
  }

  saveRequest(form: NgForm) {

    // this.isLoading = true;

    // this.crService.postRequest(JSON.stringify(form.value)).subscribe({
    //   next: (res) => {
    //     this.router.navigate(['confirmation']);
    //     this.alertService.setAlert("Request submitted.", AlertLevelEnum.SUCCESS);
    //   },
    //   error: (err) => {
    //     console.log('failed', err);
    //     this.alertService.setAlert("Request failed", AlertLevelEnum.DANGER);
    //   }
    // }).add(() => {
    //   // Runs in either case after above is done
    //   this.isLoading = false;
    // });
  }
}
