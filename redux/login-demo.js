import { createReducer, createActions } from 'reduxsauce'


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    loginRequestDemo: ['username', 'password'],
    loginSuccess: ['username'],
    loginFailureDemo: ['error', 'status'],
}) 
export const TypesLogin = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
    isLoading: false,
    data: {},
    isLogin: false
  }

/* ------------- Reducers ------------- */
export const request = (state, data) => {

    return { ...state, isLoading: true, data }
  }
  
  export const success = (state, data) => {
    return { ...state, isLoading: false, data, isLogin: true }
  }
  
  export const failure = (state, data) => {
    return { ...state, isLoading: false, data, isLogin: false }
  }

  /* ------------- Hookup Reducers To Types ------------- */
  export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST_DEMO]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE_DEMO]: failure,
  })