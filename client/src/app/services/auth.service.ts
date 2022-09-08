import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import { BehaviorSubject, from } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private UserService: UserService, private Router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.UserService.registerUser(user).subscribe(res => {
          // console.log(res);
        });
        this.user$.next(user);
        this.Router.navigate(['/home']);

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

  async signInEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    try {
      return await this.auth.signOut();
    } catch (error) {
      return error;
    }
  }

  async registerEmailAndPassword(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

}
