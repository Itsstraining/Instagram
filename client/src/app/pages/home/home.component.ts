import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

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
    private PostService: PostService
  ) {
    this.AuthService.user$.subscribe(user => {
      if (user.email) {
        this.user = user
      }
    })
  }

  ngOnInit(): void {
    this.PostService.getPost().subscribe(
      res => {
        this.posts = res;
      }
    )
  }

}
