import axios from "axios";

export const FETCH_SMURFINFO_START = "FETCH_SMURFINFO_START";
export const FETCH_SMURFINFO_SUCCESS = "FETCH_SMURFINFO_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfInfo = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFINFO_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURFINFO_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const addSmurf = (formValues) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", formValues)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => console.log(err));
};
