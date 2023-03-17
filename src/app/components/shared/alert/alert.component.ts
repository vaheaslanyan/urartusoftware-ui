import { Component } from '@angular/core';
import { AlertLevelEnum } from 'src/app/models/AlertLevelEnum';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  isActive = false;

  message?: string;
  level?: AlertLevelEnum;

  alertLevel = AlertLevelEnum;

  constructor(private alertService: AlertService) {}
  
  ngOnInit() {
    this.alertService.alertMessage$.subscribe(
      message => {
        this.message = message;
      }
    )
    this.alertService.alertLevel$.subscribe(
      level => {
        this.level = level;
      }
    )
    this.alertService.isActive$.subscribe(
      active => {
        this.isActive = active;
      }
    )
  }
}
