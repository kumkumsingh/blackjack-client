// import * as request from "superagent";
// const baseUrl = "http://localhost:4000";

// //------------- create a lobby-----------------
// export const LOBBY_CREATE_SUCCESS = "LOBBY_CREATE_SUCCESS";

// const lobbyCreateSuccess = room => ({ 
//     type: LOBBY_CREATE_SUCCESS,
//     payload: room 
// });

// export const createLobby = (data) => (dispatch, getState) => {
//     //const token = getState().jwt;
//     request
//         .post(`${baseUrl}/lobby`)
//         //.set("Authorization", `Bearer ${token}`)
//         .send(data)
//         .then(response => {
//             dispatch(lobbyCreateSuccess(response.body))
//         })
//         .catch(console.error)
// }

// //------------ update a lobby ----------------------
// export const LOBBY_UPDATE_SUCCESS = 'LOBBY_UPDATE_SUCCESS'

// const lobbyUpdateSuccess = room => ({
//     type: LOBBY_UPDATE_SUCCESS,
//     payload: room
// })

// export const UpdateLobby = (id, name) => (dispatch, getState) => {

//     // const token = getState().auth;
//     // console.log('checking token in updateteamreducer',token)
//     // console.log('checking id,name for updateteamreducer',id ,name)
//     request
//         .put(`${baseUrl}/team/${id}`)
//         .send(name)
//         .then(response => {
//             dispatch(teamUpdateSuccess(response.body))
//             console.log('checking response in updateteam',response.body)
           
//         })
//         .catch(console.error)
// }