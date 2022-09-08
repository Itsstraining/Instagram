import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthAction from "src/app/actions/auth.action"
import { AuthService } from 'src/app/services/auth.service';
import { AuthState } from 'src/app/states/auth.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Router: Router, private store: Store<{ auth: AuthState }>, private AuthService: AuthService) {
    this.auth$ = this.store.select(state => state.auth);
  }

  auth$: Observable<AuthState>;

  ngOnInit(): void {
    this.auth$.subscribe(
      res => {
        if (res.isLoading) {
          window.location.href = "/home"
        }
      }
    )
  }

  public account = {
    email: "",
    password: ""
  }

  login() {
    this.store.dispatch(AuthAction.login())
  }

  loginWithEmail() {
    this.AuthService.signInEmailAndPassword(this.account.email, this.account.password)
      .then(res => {
        console.log(res);
        this.Router.navigate(['/home'])
      })
      .catch(err => {
        console.log(err);
      })
  }
}
