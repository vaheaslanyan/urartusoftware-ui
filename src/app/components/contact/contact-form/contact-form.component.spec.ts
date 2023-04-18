import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ContactRequestService } from 'src/app/services/contact-request.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgForm } from '@angular/forms';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let crService: ContactRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactRequestService],
      declarations: [ContactFormComponent, SpinnerComponent],
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
