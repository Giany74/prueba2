
import { AUTH_LOGIN, AUTH_LOGOUT, ADS_CREATED, ADS_LOADED } from './types';

const defaultState = {
  auth: false,
  ads: [],
};

// export default function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case AUTH_LOGIN:
//       return {
//         ...state,
//         auth: true,
//       };
//     case AUTH_LOGOUT:
//       return {
//         ...state,
//         auth: false,
//       };
//     case ADS_CREATED:
//       return {
//         ...state,
//         ads: action.payload,
//       };
//     case ADS_LOADED:
//       return {
//         ...state,
//         ads: [...state.ads, action.payload],
//       };
//     default:
//       return state;
//   }
// }

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ads(state = defaultState.ads, action) {
  switch (action.type) {
    case ADS_LOADED:
      return action.payload;
    case ADS_CREATED:
    default:
      return state;
  }
}

// export default function combinedReducer (state = defaultState, action) {
//   return {
//     auth: auth(state.auth, action),
//     ads: ads(state.ads, action),
//   };
// }

// export default combineReducers({ auth, ads });
