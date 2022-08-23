import { Component, TemplateRef } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
// import { CreatePostComponent } from './components/create-post/create-post.component';
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

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }
}
