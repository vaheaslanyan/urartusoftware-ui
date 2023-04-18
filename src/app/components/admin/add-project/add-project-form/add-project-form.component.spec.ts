import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectFormComponent } from './add-project-form.component';
import { SpinnerComponent } from 'src/app/components/shared/spinner/spinner.component';
import { CustomButtonComponent } from 'src/app/components/shared/custom-button/custom-button.component';

describe('AddProjectFormComponent', () => {
  let component: AddProjectFormComponent;
  let fixture: ComponentFixture<AddProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectFormComponent, SpinnerComponent, CustomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
