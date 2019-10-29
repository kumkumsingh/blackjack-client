import React from 'react'

export default function LogInForm(props) {
    return (
        <div>
            hello login form
            <form onSubmit = {props.onSubmit}> 
                <lable>Email:</lable>
                <input type='text' name='email' onChange={props.onChange} value ={props.value.email}></input>
                <lable>Password:</lable>
                <input type='password' name='password' onChange={props.onChange} value ={props.value.password} ></input>
                <input type='submit'/>
            </form>
        </div>
    )
}
