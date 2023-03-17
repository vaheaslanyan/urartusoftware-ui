import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ContactRequest } from 'src/app/models/ContactRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  baseUrl: string = environment.contactRequestsURL;

  constructor(private httpClient: HttpClient) { }

  postRequest(request: any) : Observable<ContactRequest> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<ContactRequest>(this.baseUrl, request, httpOptions);
  }
}
