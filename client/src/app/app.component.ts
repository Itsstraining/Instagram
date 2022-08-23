import { Component } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { DialogCreatePostComponent } from '../app/components/dialog-create-post/dialog-create-post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(private store: Store<{ auth: AuthState }>, private AuthService: AuthService, private dialogService: NbDialogService) {
    this.AuthService.user$.subscribe(user => {
      if (user.email) {
        console.log(user);
      }
    })
  }

  login() {
    this.store.dispatch(AuthAction.login())
    // console.log("1");
  }

  open() {
    this.dialogService.open(DialogCreatePostComponent);
  }
}
