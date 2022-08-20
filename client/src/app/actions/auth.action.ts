
import { createAction, props } from "@ngrx/store";

export const login = createAction ('[Auth] Login');
export const loginSuccess = createAction('[Auth] LoginSuccess',props<{idToken: string}>())
export const loginFail = createAction('[Auth] LoginFail',props<{error:string}>());

