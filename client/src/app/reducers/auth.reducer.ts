import { AuthState } from "../states/auth.state";
import { createReducer, on } from "@ngrx/store";
import * as AuthAction from "../actions/auth.action"


const initialState: AuthState={
    isLoading: false,
    error:"",
    idToken: "",
}

export const authReducer=createReducer(initialState,
    on(AuthAction.login, state=>state),
    on(AuthAction.loginSuccess,(state,action)=>({...state,
    isLoading:true, idToken:action.idToken})),
    on(AuthAction.loginFail,(state,action)=>({...state,
    error: action.error})),
)