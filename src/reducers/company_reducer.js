import { GET_COMPANY } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY:
      return { ...state, register: action.payload };
    default:
      return state;
  }
}
