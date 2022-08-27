import { createAction, props } from "@ngrx/store";


export const createPost = createAction('[Post] Post');
export const createSuccess = createAction('[Post] PostSuccess');
export const createFailure = createAction('[Post] PostFailure', props<{error:string}>());



