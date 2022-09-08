import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { combineLatest, delay, forkJoin, from, map, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(
    private dialogService: NbDialogService,
    private AuthSV: AuthService,
    private UserService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngAfterViewInit(): void {
    (document.getElementsByClassName("tabset")[0] as HTMLElement).style.justifyContent = "center";
  }

  public user!: any;
  public posts!: any;
  public profile!: any;

  ngOnInit(): void {
    this.routerParams();
    this.AuthUser();
  }

  isFollow = false;
  private _email!: string;

  private routerParams() {
    this.activatedRoute.params.subscribe(async (res: any) => {
      try {
        this._email = res['email'];
        this.getProfile();
      } catch (error) {
        console.log(error);
      }
    })
  }

  private async getProfile() {
    this.profile = await this.UserService.getProfile(this._email).toPromise();
    this.posts = this.profile.posts;
  }

  private AuthUser() {
    this.AuthSV.user$.subscribe(async (user: any) => {
      if (user.email) {
        this.user = user;
        this.profile.followers.forEach((follower: any) => {
          if (follower === this.user.email) {
            this.isFollow = true;
          }
        }
        )
      }

    });
  }

  follow() {
    this.UserService.follow(this.user.email, this.profile.email).subscribe(res => {
      this.getProfile();
    })
  }

  unFollow() {
    this.UserService.unfollow(this.user.email, this.profile.email).subscribe(res => {
      console.log(res);
    })
  }


}
