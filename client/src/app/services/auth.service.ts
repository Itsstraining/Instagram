import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  login(){
    return from(new Promise<string>(async(resolve,reject)=>{
      try{
        let credential = await signInWithPopup(this.auth, new GoogleAuthProvider())
        let idToken = await credential.user.getIdToken();
      resolve(idToken)
      console.log(idToken) 
    }catch{
      reject("Cannot login with Google")
    }
    }));
  }
}
