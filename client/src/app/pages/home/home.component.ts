import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public user!:User;
  constructor(private store :Store<{auth:Auth}>, private AuthService: AuthService ) {
    this.AuthService.user$.subscribe(user=>{
      if(user.email){
        this.user=user
      }
    })


  }

  ngOnInit(): void {
  }

}
