<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
=======
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

>>>>>>> 5f372ef5138d896132fa36c55da5783ba453c464

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

<<<<<<< HEAD
  public user!: User;
  constructor(private AuthService: AuthService) {
    this.AuthService.user$.subscribe(user=>{
      if(user.email){
        console.log(user);
        this.user=user;
      }
    }
    
    )
  }
=======
  constructor(private dialogService: NbDialogService) { }
>>>>>>> 5f372ef5138d896132fa36c55da5783ba453c464

  ngOnInit(): void {

  }
  detail(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' });
  }

}
