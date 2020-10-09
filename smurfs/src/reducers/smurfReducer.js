import { FETCH_SMURFINFO_START } from "../actions/smurfActions";
import { FETCH_SMURFINFO_SUCCESS } from "../actions/smurfActions";
import { ADD_SMURF } from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  newSmurf: {
    name: "",
    age: "",
    height: "",
  },
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFINFO_START:
      return { ...state };
    case FETCH_SMURFINFO_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        newSmurf: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: state.smurfs,
      };
    default:
      return state;
  }
};
