import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertLevelEnum } from '../models/AlertLevelEnum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  // creating subject sources
  isActiveSource = new Subject<boolean>();
  private alertMessageSource = new Subject<string>();
  private alertLevelSource = new Subject<AlertLevelEnum>();
  // exposing subject as an observable
  isActive$ = this.isActiveSource.asObservable();
  alertMessage$ = this.alertMessageSource.asObservable();
  alertLevel$ = this.alertLevelSource.asObservable();

  constructor() {}

  setAlert(message: string, level : AlertLevelEnum) {
    // pushing data to the source
    this.alertMessageSource.next(message);
    this.alertLevelSource.next(level);
    this.isActiveSource.next(true);

    setTimeout( ()=>{
      this.isActiveSource.next(false);
    }, 5000)
  }
}
