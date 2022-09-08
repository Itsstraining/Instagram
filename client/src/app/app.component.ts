import { Component, TemplateRef } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { User } from '@angular/fire/auth';
import { PostService } from './services/post.service';
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

  onImageError(e: any) {
    e.target.src = 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
  }


  public user!: User;
  constructor(private store: Store<{ auth: AuthState }>, private AuthService: AuthService, private dialogService: NbDialogService, private PostService: PostService) {
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
    if (!this.content) return;
    (await this.PostService.sharePost(this.content, this.file)).subscribe(
      res => {
        console.log(res);
        window.location.reload()
      },
      err => {
        console.log(err);
      }
    )
  }

  public file!: any;
  public imageSrc!: any;
  public content!: string;


  onSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(this.file);
    }
  }

  async signOut() {
    await this.AuthService.logout();
    window.location.href = "/"
  }

}

