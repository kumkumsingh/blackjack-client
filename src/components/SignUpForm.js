import React from 'react'

export default function SignUpForm(props) {
    // console.log("props in signup", props)
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                name="username"
                type="text"
                onChange={props.onChange}
                value={props.value.username}
                placeholder="username">
                </input>

                <input
                name="email"
                type="email"
                onChange={props.onChange}
                value={props.value.email}
                placeholder="Email">
                </input>

                <input
                name="password"
                type="password"
                onChange={props.onChange}
                value={props.value.password}
                placeholder="Password">
                </input>

                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
