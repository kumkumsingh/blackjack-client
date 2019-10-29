import React from 'react'
import * as request from 'superagent'
import SignUpForm from './SignUpForm'
// import {Redirect} from 'react-router-dom'

export default class Signup extends React.Component{

    state={
        username: "",
        email: "",
        password: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: "",
            email: "",
            password: ""
        })
        // console.log("Username", this.state.username,"email", this.state.email, "password", this.state.password)

        request
            .post(`http://localhost:4000/signup`)
            .send({username: this.state.username,
                email: this.state.email,
                  password: this.state.password})
            .then(response => {
                console.log("response",response)
                // if(!response.body.status){
                //     return 
                // }
                // return <Redirect to="/login"/>
                this.props.history.push('/login')
            })
            .catch(error => console.log("Got an error", error));

       // return <Redirect to="/login" />
    }

    render(){
        // console.log("current state", this.state)
        return(
            <SignUpForm 
            value={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}/>
        )
    }
}