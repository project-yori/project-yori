import { combineReducers } from 'redux';
import { ACTION_TYPES, STORE_TYPES } from './types';

const initialState = {
  [STORE_TYPES.STATE.TOP.PHOTOS]: [],
  [STORE_TYPES.STATE.CREATE.META]: {
    [STORE_TYPES.STATE.CREATE.GROUP]: null,
    [STORE_TYPES.STATE.CREATE.COSTUME]: null,
    [STORE_TYPES.STATE.CREATE.MEMBER]: [],    
  },
};

const setTopData = function(state, action) {
  return {
    ...state,
    [STORE_TYPES.STATE.TOP.PHOTOS]: action.data
  };
};

const top = function(state = initialState[STORE_TYPES.STATE.TOP.PHOTOS], action) {
  switch (action.type) {
    case ACTION_TYPES.GET_PHOTOS:
      return setTopData(state, action);
    default:
      return state;
  }
};

const create = function(state = initialState[STORE_TYPES.STATE.CREATE.META], action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_PHOTO_GROUP:
      return {...state, [STORE_TYPES.STATE.CREATE.GROUP]: action.data };
    case ACTION_TYPES.CREATE_PHOTO_COSTUME:
      return {...state, [STORE_TYPES.STATE.CREATE.COSTUME]: action.data};
    default:
      return state;      
   }
}


export const rootReducer = combineReducers({
  /* Add reducers here */
  top,
  create
});
