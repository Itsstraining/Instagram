import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import { PostService } from "../services/post.service";


@Injectable()
  export class PostEffect{
    constructor(private postService:PostService, private action$: Actions ){}
    // createPost$ = createEffect(())


  }
