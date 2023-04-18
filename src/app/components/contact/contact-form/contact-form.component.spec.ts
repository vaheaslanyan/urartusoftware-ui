import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ContactRequestService } from 'src/app/services/contact-request.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let crService: ContactRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent, SpinnerComponent, CustomButtonComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ContactRequestService],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should activate loader on form submission by setting isLoading to true', () => {
  //   const mockForm = <NgForm>{};
  //   component.submitForm(mockForm);
  //   expect(component.isLoading).toBeTrue();
  // });
});
