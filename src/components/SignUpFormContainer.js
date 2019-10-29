import React from 'react'
import SignUpForm from './SignUpForm'
import { signUp } from '../actions/login'
import { connect } from 'react-redux'

class SignUpFormContainer extends React.Component{

    state={
        username: "",
        email: "",
        password: "",
        message: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const result = this.props.signUp(this.state)
        // console.log("result", result)
        if(result){
            this.setState({message: result})
        } else {
        this.setState({
            username: "",
            email: "",
            password: "",
            message: "You are signed in.."
        })
        
        setTimeout(() => {
            this.props.history.push('/login')
           }, 2500);
    }    
    }

    render(){
        // console.log("current state", this.state)
        return(
            <div>
            <p>{this.state.message}</p>
            <SignUpForm 
            value={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}/>
       </div> )
    }
}

export default connect(null, {signUp})(SignUpFormContainer)