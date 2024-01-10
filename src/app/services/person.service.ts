import { Injectable } from '@angular/core';
import { Endpoint } from '../utils/endpoints';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PersonResponse } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private readonly http: HttpClient) { }

  getPersons(): Observable<HttpResponse<PersonResponse> | HttpErrorResponse> {
    const url = Endpoint.persons;
    return this.http.get<HttpResponse<PersonResponse>>(url);
  }
}
