import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../configs/baseURL';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private idToken!: string;
  constructor(private http: HttpClient, private AuthService: AuthService) {
    this.AuthService.user$.subscribe(async (user: any) => {
      if (user) {
        this.idToken = user['accessToken'];
      }
    })
  }

  public sharePost(content: string, fileImage: any) {
    // console.log(content, image);
    const formData: any = new FormData();

    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.idToken}`)
    }

    formData.append("content", content);
    formData.append("image", fileImage);

    return this.http.post(URL + "post/create", formData, header)
  }

  public getPost(idToken: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${idToken}`)
    }
    return this.http.get(URL + "post/all", header)
  }

  public likePost(postId: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.idToken}`)
    }
    return this.http.post(URL + "post/like", { postId }, header)
  }

  public commentPost(postId: string, content: string) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.idToken}`)
    }
    return this.http.post(URL + "post/comment", { postId, content }, header)
  }


}
