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

  getSearch(keyword: string) {
    return this.http.get(URL + `user/search?keyword=${keyword}`);
  }

  getAllUser() {
    return this.http.get(URL + `user/get-all`);
  }

  getSuggestion() {
    return this.http.get(URL + `user/suggestion`);
  }

  follow(userId: string, followId: string) {
    return this.http.put(URL + `user/follow`, {
      userId,
      followId
    });
  }

  unfollow(userId: string, followId: string) {
    return this.http.put(URL + `user/unfollow`, {
      userId,
      followId
    });
  }
}
