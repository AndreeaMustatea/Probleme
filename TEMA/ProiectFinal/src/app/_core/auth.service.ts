import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly serverUrl = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) { }

  register(body: { email: any; password: any; }) : Observable <any>
  {
  return this.httpClient.post(this.serverUrl + '/register',body);
  }
  login(body:{email: any; password: any;}) : Observable <any>
  { 
    return this.httpClient.post(this.serverUrl + '/login',body);
    
  }}