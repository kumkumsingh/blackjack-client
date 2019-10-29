import * as request from "superagent";
const baseUrl = "http://localhost:4000";


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const loggedInSuccess = jwt => ({ 
    type: LOGIN_SUCCESS,
    payload: jwt 
});

export const logIn = (email, password) => (dispatch, getState) => {
  // console.log("my email id password", email, password);
  if (email && password) {
    request
      .post(`${baseUrl}/login`)
      .send({ email, password })
      .then(response => {
        
        dispatch(loggedInSuccess(response.body));
        
      })
      .catch(error => console.log(error));
  } else {
   // console.log("result in action")
    return "Please provide correct details";
  }
};

export const signUp = (data) => (dispatch) => {

  if(data.username && data.email && data.password){
 
   request
     .post(`${baseUrl}/signup`)
     .send(data)
     .catch(error => console.log(error));
 } else {
   return "Please provide details"
 }
 };
