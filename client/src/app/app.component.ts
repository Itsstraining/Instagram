import { Component, TemplateRef } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { User } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  url = "https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-dien-thoai-tone-trang-tinh-khiet-1-19-10-27-56.jpg";
  onselectFile(e: any) {
    console.log(e);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => { this.url = event.target.result; }
    }
  }

  public user!: User;
  constructor(private store: Store<{ auth: AuthState }>, private AuthService: AuthService, private dialogService: NbDialogService) {
    this.AuthService.user$.subscribe(user => {
      if (user.email) {
        this.user = user;
      }
    })
  }


  login() {
    this.store.dispatch(AuthAction.login())
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }

  async sharePost() {
    if (await this.user.getIdToken()) {

    } else {
      return;
    }
  }

}

