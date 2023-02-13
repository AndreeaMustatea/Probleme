import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly serverUrl = 'https://reqres.in/api/register';
  constructor(private httpClient: HttpClient) { }

  register(body: { email: any; password: any; }) : Observable <any>
  {
  return this.httpClient.post(this.serverUrl,body);
  }
}