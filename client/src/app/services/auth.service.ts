import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from '@firebase/auth';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
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
