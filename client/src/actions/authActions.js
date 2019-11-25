import axios from "axios";

export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios.post("/api/auth/register", userData);
};
