import { Component } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(  private store:Store <{auth:AuthState}>){}

  login(){
    this.store.dispatch(AuthAction.login())
    console.log("1");
  }
}
