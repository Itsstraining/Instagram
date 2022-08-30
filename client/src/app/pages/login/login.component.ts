import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthAction from "src/app/actions/auth.action"
import { AuthState } from 'src/app/states/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<{ auth: AuthState }>) { }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(AuthAction.login())
    // console.log("1");
  }
}
