import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private dialogService: NbDialogService, private AuthSV: AuthService, private UserService: UserService) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    (document.getElementsByClassName("tabset")[0] as HTMLElement).style.justifyContent = "center";
  }

  public user!: any;
  public posts!: any;
  public profile!: any;

  ngOnInit(): void {
    this.AuthSV.user$.subscribe(async (user: any) => {
      this.user = user;
      this.profile = await this.UserService.getProfile(user.email).toPromise();
      this.posts = this.profile.posts;
    });

  }

}
