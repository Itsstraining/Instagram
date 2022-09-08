import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from '@firebase/auth';
import { BehaviorSubject, from } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private UserService: UserService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.UserService.registerUser(user).subscribe(res => {
          // console.log(res);
        });
        this.user$.next(user);
      }
    })
  }

  public user$ = new BehaviorSubject<User>(<User>{});

  login() {
    return from(new Promise<string>(async (resolve, reject) => {
      try {
        let credential = await signInWithPopup(this.auth, new GoogleAuthProvider())
        let idToken = await credential.user.getIdToken();
        resolve(idToken)
        console.log(idToken)
      } catch {
        reject("Cannot login with Google")
      }
    }));
  }
}
