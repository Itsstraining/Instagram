import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Actions, createEffect, ofType} from "@ngrx/effects";

import * as AuthAction from "../actions/auth.action"
import { catchError, switchMap, of, map } from "rxjs";

@Injectable()
export class AuthEffect{
    constructor(private authService: AuthService, private action$: Actions){}

    autheffect$= createEffect(()=>this.action$.pipe(
        ofType(AuthAction.login),
        switchMap(()=>this.authService.login()),
        map(idToken=>AuthAction.loginSuccess({idToken:idToken})),
        catchError(error => of(AuthAction.loginFail({error: error})))
    ))
}