import {OBTUVE_DATOS, DELETE_COCKTAILS,FINDING_DATOS} from './types';

const initialState = {
  finding:false,
  data: [],
};
//export const OBTUVE_DATOS = 'OBTUVE_DATOS';
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "FINDING_DATOS":
      return {...state, finding: true,}
    case OBTUVE_DATOS:
      return {data: action.payload,finding:false,};
      case "DELETE_COCKTAILS":
        return{data:[]}
    default:
      return state;
  }
};
export default reducer