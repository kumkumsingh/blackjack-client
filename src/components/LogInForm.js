import React from 'react'

export default function LogInForm(props) {
    return (
        <div>
            <p>Please login to continue with the game</p>
            <form onSubmit = {props.onSubmit}> 
                <label>Email:</label>
                <input type='text' name='email' onChange={props.onChange} value ={props.value.email}></input>
                <label>Password:</label>
                <input type='password' name='password' onChange={props.onChange} value ={props.value.password} ></input>
                <input type='submit'/>
            </form>
        </div>
    )
}
