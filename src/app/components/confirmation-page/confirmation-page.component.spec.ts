import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPageComponent } from './confirmation-page.component';
import { CustomButtonComponent } from '../shared/custom-button/custom-button.component';

describe('ConfirmationPageComponent', () => {
  let component: ConfirmationPageComponent;
  let fixture: ComponentFixture<ConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationPageComponent, CustomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
