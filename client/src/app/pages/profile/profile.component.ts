import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private AuthSV: AuthService) { }

  public user!: User;
  ngOnInit(): void {
    this.AuthSV.user$.subscribe(user => {
      this.user = user;
      (document.getElementsByClassName("tabset")[0] as HTMLElement).style.justifyContent = "center";
    })

  }

}
