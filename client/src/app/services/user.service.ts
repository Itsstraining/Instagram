import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { URL } from '../configs/baseURL';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    return this.http.post(URL + "user/register", user);
  }

  getProfile(email: string) {
    return this.http.get(URL + `user/profile/${email}`);
  }
}
