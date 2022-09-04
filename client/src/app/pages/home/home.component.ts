import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user!:User;
  constructor(private store :Store<{auth:Auth}>, private AuthService: AuthService, private PostService:PostService ) {
    this.AuthService.user$.subscribe(user=>{
      if(user.email){
        this.user=user
      }
    })
  }

  public posts:any[] = []

  ngOnInit(): void {
    console.log("I")
    this.PostService.GetAll().subscribe(
      (res:any)=>{
        console.log(res)
        for(let i = 0; i<res.length; i++){
          this.posts.push(res[i])
        }
      }
    )

  }

}
