import { TestBed } from '@angular/core/testing';

import { ContactRequestService } from './contact-request.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ContactRequestService', () => {
  let service: ContactRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ContactRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
