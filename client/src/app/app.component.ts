import { Component, TemplateRef } from '@angular/core';
import * as AuthAction from "src/app/actions/auth.action"
import { Store } from '@ngrx/store';
import { AuthState } from './states/auth.state';
import { AuthService } from './services/auth.service';
import { NbDialogService } from '@nebular/theme';
import { User } from '@angular/fire/auth';

// import { CreatePostComponent } from './components/create-post/create-post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  url="https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-dien-thoai-tone-trang-tinh-khiet-1-19-10-27-56.jpg";
  onselectFile(e:any){
    console.log(e);
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{this.url=event.target.result;}
    }
  }
  // users$ = this.store.select((user)=>user)
  // users$=this.AuthService.user$;

  
  public user!: User;
  constructor(private store: Store<{ auth: AuthState }>, private AuthService: AuthService, private dialogService: NbDialogService) {
    this.AuthService.user$.subscribe(user => {
      if (user.email) {
        console.log(user);
        this.user = user;
      }
    })
    // console.log(this.users$)
  }


  login() {
    this.store.dispatch(AuthAction.login())
    // console.log("1");
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }
  // url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADn5+cPDw9OTk7u7u6EhITHx8eUlJStra1iYmLAwMBISEi5ubnExMTLy8tubm709PQ5OTn5+fne3t4uLi51dXU0NDSOjo7h4eFZWVlUVFSmpqaxsbFnZ2ednZ3U1NQYGBhycnJ/f39AQEAeHh4ip6wBAAADCElEQVR4nO3c63KqMBRAYYLVqrVe66VW67Xv/4pneso2KBBKDUlw1vfTgZm9RkUubaIIAAAAAAAAAAAAAAAAAAAAQN1Gp/V463uIOo3Vt+nE9xy1Oaof85nvSWqyU2Lte5R6vCit43uYOryptI3vcexrt64K1cj3QNYN1I133xNZNr4NfLQDajcTqNTA91A2veYEKrXwPZY9+9xApXa+B7OlfSgoVC++R7NkWRSo1Jvv2azoFweq1iOchK8MgUqdfY93v60xUKmj7wHvNSk8yoimn75tygJV3/eId0p/C/UhZzDXr059j3injk7p6TObz1i/vPQ94p30Ze8p6qU+menXm202TUI+oqtCfS7e+B/9+OfKtz+7KZTP76vvAS3oDqYf/++RXhdGo/XyPI79zmbZTeEDorD5KAxfPHrJGKXuqOUXxsPMTsMgfyPfFyrf4PKDkFc4LNhrPfRSYdApmPSbJOYU9or3Wrc9peT7MARenjRlC2PDXuorpLviplsx+k3MFpqvHg/h3BUvu1ORXMZnC4u+u4lPb0U3ZnPzoHL5kC0036UK57pjVDJnKzlmZAuLjqQilAepp5I55WlozrHUeIQK517jp3nMlWyXU9jOPFa88hXIDWP9RkwHt9Ydfbcw95xme3rK7KQTA7l8fLoM9Gzc7rfnpakH4hQ6QqGgUFDoHoWCQkGhexQKCgWF7lEoKBQUukehoFBQ6B6FgkJBoXsUCgoFhe5RKCgUFLpHoaBQUOgeheLxC7cPX6j/ab1r3K65hZPL5Hvjds0tvHxMS/4ytsGFySpDZX/62+TCKO4dd/uyjRpd+CsUukdhVRS6R2FVFLpHYVUUukdhVRS6R2FVFLpHYVUUukdhVRS6pwvtrPI4Cbhw0bVhFVxhycomdzgEskbNsXzUP1oGsn5L/mrdNox9pyXatRUGs1hU2TIzfxXQ4q2HegpDWYAnKlnR6s+CWvgzPtsPDOZLmOi1ymeuohPI4jtp+023Y8dqE9r7BwAAAAAAAAAAAAAAAAAAAAAAougfhSEte2vinh0AAAAASUVORK5CYII="
 
}

