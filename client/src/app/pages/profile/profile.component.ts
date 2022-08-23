import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
