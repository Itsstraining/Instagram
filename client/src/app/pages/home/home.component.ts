import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: any = [];

  public user!: User;
  public isLoad = true;
  constructor(
    private store: Store<{ auth: Auth }>,
    private AuthService: AuthService,
    private PostService: PostService,
    private UserService: UserService
  ) {
    this.AuthService.user$.subscribe((user: any) => {
      if (user.email) {
        this.user = user;
        if (user.displayName === null || user.displayName === undefined) {
          user.displayName = this.handleDisplayName(user.email);
        };
        this.getPosts(user['accessToken']);
      }
    })
  }

  ngOnInit(): void {
    this.getSuggestion();
  }

  public currentDay = Date.now().toString();

  onImageError(e: any) {
    e.target.src = 'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
  }

  like(postId: string) {
    this.PostService.likePost(postId).subscribe(res => {
      this.AuthService.user$.subscribe((user: any) => {
        if (user.email) {
          this.user = user
          this.getPosts(user['accessToken']);
          this.content = "";
        }
      })
    })
  }

  private handleDisplayName(email: string) {
    return email.split('@')[0];
  }

  content: string = "";

  comment(e: any, postId: string) {
    if (e.keyCode === 13) {
      this.PostService.commentPost(postId, this.content).subscribe(res => {
        this.AuthService.user$.subscribe((user: any) => {
          if (user.email) {
            this.user = user
            this.getPosts(user['accessToken']);
            this.content = "";
          }
        })
      })
    }
  }

  getPosts(idToken: string) {
    this.PostService.getPost(idToken).subscribe(
      res => {
        this.posts = res;
      }
    )
  }

  public usersSuggest!: any;

  getSuggestion() {
    this.UserService.getSuggestion().subscribe(
      res => {
        console.log(res);
        this.usersSuggest = res;
      }
    )
  }

}
