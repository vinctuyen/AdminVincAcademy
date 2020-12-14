import { createReducer, createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  tableRequest: ["table"],
  tableRequestSuccess: ["data"],
  tableRequestFailure: ["error", "status"],

  tableAddRequest: ["data"],
  tableAddRequestSuccess: ["data"],
  tableAddRequestFailure: ["error", "status"],

  tableUpdateRequest: ["data"],
  tableUpdateRequestSuccess: ["data"],
  tableUpdateRequestFailure: ["error", "status"]
});
export const TypesTable = Types;
export default Creators;

export const INITIAL_STATE = {
  isLoading: false,
  data: { rows: [], headRows: [] }
};

export const request = (state, data) => {
  return { ...state, isLoading: true, data };
};

export const success = (state, data) => {
  return { ...state, isLoading: false, data: data.data };
};

export const failure = (state, data) => {
  return { ...state, isLoading: false, data };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TABLE_REQUEST]: request,
  [Types.TABLE_REQUEST_SUCCESS]: success,
  [Types.TABLE_REQUEST_FAILURE]: failure,

  [Types.TABLE_ADD_REQUEST]: request,
  [Types.TABLE_ADD_REQUEST_SUCCESS]: success,
  [Types.TABLE_ADD_REQUEST_FAILURE]: failure

  //   [Types.TABLE_UPDATE_REQUEST]: request,
  //   [Types.TABLE_UPDATE_REQUEST_SUCCESS]: success,
  //   [Types.TABLE_UPDATE_REQUEST_FAILURE]: failure
});
