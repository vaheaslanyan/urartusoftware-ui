import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ContactRequest } from 'src/app/models/ContactRequest';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  baseUrl: string = environment.contactRequestsURL;

  constructor(private httpClient: HttpClient, private alertService: AlertService) { }

  postRequest(request: any) : Observable<ContactRequest> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<ContactRequest>(this.baseUrl, request, httpOptions);
  }
}
